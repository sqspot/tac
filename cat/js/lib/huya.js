import './crypto-js.js'
import './uri.min.js'

/**
 * 虎牙 js 本地代理
 * 周星星,proxy://js_proxy?js=../js/huya.js&id=11342412
 */

function decode_live_url_info(anticode) {
	const query = new Uri(`?${anticode}`)
	const fm = base64Decode(query.getQueryParamValue("fm"))
	return {
		hash_prefix: fm.split('_')[0],
		uuid: query.getQueryParamValue("uuid") || '',
		ctype: query.getQueryParamValue("ctype") || '',
		txyp: query.getQueryParamValue("txyp") || '',
		fs: query.getQueryParamValue("fs") || '',
		t: query.getQueryParamValue("t") || '',
	}
}

function get_live_url_info(roomId) {
	const text = http.get(`https://www.huya.com/${roomId}`, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
		}
	}).text()
	const streamInfo = text.match(/stream: ([\s\S]*?)\n/g)?.[0] ?? text.match(/"stream": "([\s\S]*?)"/g)?.[0]
	if (!streamInfo) return null
	const liveData = JSON.parse(text.match(/stream: ([\s\S]*?)\n/g)?.[0].substring('stream:'.length).trim())
	const live_url_infos = {}
	liveData.data[0].gameStreamInfoList.forEach(streamInfo => {
		let live_url_info = {}
		const sCdnType = streamInfo['sCdnType']
		live_url_info['stream_name'] = streamInfo['sStreamName']
		live_url_info['base_url'] = streamInfo['sHlsUrl']
		live_url_info['hls_url'] = `${streamInfo['sHlsUrl']}/${streamInfo['sStreamName']}.${streamInfo['sHlsUrlSuffix']}`
		live_url_infos[sCdnType] = { ...live_url_info, ...decode_live_url_info(streamInfo['sHlsAntiCode']) }
	})
	return live_url_infos
}

function getRealUrl(roomId, userId = 1463993859134, cnd = 'AL', ratio = '') {
	let urls = []
	let seqid = (new Date().getTime() + userId).toString();
	let wsTime = (Math.floor(Date.now() / 1000) + 3600).toString(16);
	const liveUrlInfos = get_live_url_info(roomId)
	if (!liveUrlInfos) return null
	const liveUrlInfo = liveUrlInfos[cnd] || Object.values(liveUrlInfos)[0]
	if (!liveUrlInfo) return null
	let hash0 = CryptoJS.MD5(`${seqid}|${liveUrlInfo.ctype}|${liveUrlInfo.t}`)
	let hash1 = CryptoJS.MD5(`${liveUrlInfo.hash_prefix}_${userId}_${liveUrlInfo.stream_name}_${hash0}_${wsTime}`)
	let url = '';
	if (liveUrlInfo.ctype.includes('mobile')) {
		return `${liveUrlInfo.hls_url}?wsSecret=${hash1}&wsTime=${wsTime}&uuid=${liveUrlInfo.uuid}&uid=${userId}&seqid=${seqid}&ratio=${ratio}&txyp=${liveUrlInfo.txyp}&fs=${liveUrlInfo.fs}&ctype=${liveUrlInfo.ctype}&ver=1&t=${liveUrlInfo.t}`;
	} else {
		return `${liveUrlInfo.hls_url}?wsSecret=${hash1}&wsTime=${wsTime}&seqid=${seqid}&ctype=${liveUrlInfo.ctype}&ver=1&txyp=${liveUrlInfo.txyp}&fs=${liveUrlInfo.fs}&ratio=${ratio}&u=${userId}&t=${liveUrlInfo.t}&sv=2107230339`;
	}
}

export default function huya_proxy(params) {
	const url = getRealUrl(params.id)
	return url ? [302, "", "", { Location: url, Status: "302 Found" }] : [404, '', '']
}