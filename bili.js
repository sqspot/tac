//微信公众号【云星日记】制作分享
//微信公众号【云星测评】制作分享

//QQ频道搜索云星日记加入频道交流
//关注公众号回复【接口】获取在线接口
//关注公众号回复【本地接口】获取本地接口
//保存外链网址实时在线更新

//直接把在线网址外链输入TvBox就可以同步更新
//打造属于自己的app，请看下面微信公号文章链接
//TvBox生成项目打包教程：https://mp.weixin.qq.com/s/FDa4OSDwHemy8uDyhn-1UQ
//TVBox在线接口地址：https://mp.weixin.qq.com/s/uCipLSKxHvEdwKpIaQTFlw


{
"spider":"./jar/fm.jar",
//"spider":"./jar/pg.jar",
"logo": "https://raw.githubusercontent.com/sqspot/tac/main/謝分享.gif",



"sites":[
{"key":"我的哔哩sq","name":"我的哔哩sq","type":3,"api":"./lib/drpy2.min.js","ext":"./js/我的哔哩sq.js"},
{"key":"bili","name":"B站|Bili[jar]","type":3,"api":"csp_Bili","searchable":1,"quickSearch":0,"changeable":0,"ext":{	"type":"演唱会#电影#电视剧#帕梅拉#广场舞#纪录片#综艺#鬼畜#音乐#舞蹈#影视#知识#美食#风光#田园#户外#8K#徐云",	"cookie":""}}

//{"key":"说明","name":"------公众号【云星日记】------","type":3,"api":"360","searchable":1,"quickSearch":1,"filterable":1},
//{"key":"说明2","name":"------提供免费更新维护------","type":3,"api":"360","searchable":1,"quickSearch":1,"filterable":1},
//{"key": "M","name": "(新增哔哩bli套餐内容请到： 云星日记 频道反馈）","type": 3,"api": "csp_Bili","searchable": 0,"quickSearch": 0,"filterable": 1,"ext": "/"}
],
"lives":[{"name":"自選","type":0,"url":"./live.txt","epg":"https://epg.112114.xyz/?ch={name}&date={date}","logo":"https://epg.112114.xyz/logo/{name}.png"}],
"parses":[
{"name":"解析聚合","type":3,"url":"Demo"},
{"name":"Json并发","type":2,"url":"Parallel"},
{"name":"Json轮询","type":2,"url":"Sequence"},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"360資源資源","type":0,"url":"https://www.360jiexi.com/player/?url="},
{"name":"暴風資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"非凡資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"豪華資源","type":0,"url":"https://hhjiexi.com/play/?url="},
{"name":"量子資源","type":0,"url":"https://lziplayer.com/?url="},
{"name":"櫻花資源","type":0,"url":"https://jx.yhzybf.com/player/jx.php?url="},
{"name":"ikun資源","type":0,"url":"https://www.ikdmjx.com/?url="},
{"name":"tv資源","type":0,"url":"https://jx.m3u8.tv/jiexi/?url="},
{"name":"博民資源","type":0,"url":"https://www.bmm3u8.com/?url="},
{"name":"A01","type":0,"url":"http://api.apii.top/?v="},
{"name":"A05","type":0,"url":"http://www.wpsseo.cn/line.php?n=7&url="},
{"name":"超嗅探","type":3,"url":"Web"},
{"name":"西瓜嗅探1","type":0,"url":"https://t1.qlplayer.cyou/player/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"西瓜嗅探2","type":0,"url":"https://t1.qlplayer.cyou/player/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},{"name":"高清嗅探","type":0,"url":"https://jx.xmflv.com?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"夜幕嗅探","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"爱心笔记本","type":4,"url":"http://119.91.123.253:2345/Api/yun.php?url="},
{"name":"魏晓芳","type":1,"url":"https://svip.renrenmi.cc:2222/api/?key=ogGC18CjsACNo60r3E&url="},
{"name":"奧斯卡資源","type":0,"url":"https://aosikazyplayurl.com/?url="},
{"name":"色色虎資源","type":0,"url":"https://jx.jxsesehuzy.com/?url="},
{"name":"好色資源","type":0,"url":"https://haosezyplayurl.com/?url="},
{"name":"fuqi","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"盘古","type":0,"url":"https://www.m3u8.tv.cdn.8old.cn/jx.php?url="},
{"name":"左岸","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905","优播线路","腾播线路"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"太空","type":1,"url":"http://124.222.68.182/jiexi/4kJX.php/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","CL4K","renrenmi","ltnb","bilibili","1905","xigua"]}},
{"name":"未知","type":1,"url":"http://106.52.218.221:88/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"随便1","type":1,"url":"http://cl.yjhan.com:8090/home/api?type=ys&uid=821518&key=aghlmnyBFIJMPRX489&url="},
{"name":"随便2","type":1,"url":"https://www.nfjx.xyz/home/api?type=ys&uid=5767995&key=ijkmovxDEHIJPQRW69&url="},
{"name":"LTRX","type":1,"url":"https://svip.spchat.top/api/?type=ys&key=bKemW41JnxmQb4l67h&url=","ext":{"flag":["rx"]}},
{"name":"OJBK","type":0,"url":"https://jmwl.qd234.cn/v/?v=","ext":{"flag":["ltnb","renrenmi","rx","xfyun","muxm3u8","xigua","xueren","qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","bilibili","哔哩哔哩","哔哩","pptv","PPTV","sohu","letv"]}},
{"name":"parwix1","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"parwix2","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"线路m9","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=1931000&key=gktuvyzABEORSYZ135&url="},
{"name":"线路NX","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"①秒播","type":1,"url":"https://jx.hfyrw.com/mao.go?url="},
{"name":"②秒播","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"③秒播","url":"http://81.71.48.249:4456/jsonc/293shipin.php?url=","type":1,"i":"77","ext":{"flag":["qiyi","爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","bilibili","哔哩哔哩","哔哩","mgtv","芒果"]}},
{"name":"④秒播","type":1,"url":"http://106.55.234.91:4433/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"⑤秒播","type":1,"url":"http://81.71.48.249:4456/jsonc/longxia.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"⑦秒播","type":1,"url":"https://app.okmedcos.com/4k/?url="},
{"name":"⑧秒播","type":1,"url":"https://jie.1z1.cc/api/?key=HdMmTMfyf1uTOQUL0b&url="},
{"name":"Pro","type":1,"url":"http://api.vip123kan.vip/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"2","type":1,"url":"https://jx.mczdyw.com/xg.php?url=","ext":{"flag":["mgtv","芒果"]}},
{"name":"3","type":1,"url":"https://www.aiaine.com/api/?key=kVqmG5dAQ5dZTcECw8&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"4","type":1,"url":"https://svip.rongxingvr.top/api/?key=niBgMGXVdCQhsmeEBK&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"8","type":1,"url":"https://app.iminna.com/jx/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"飓风影院2","type":1,"url":"https://vvip.funsline.cn/api/?key=3xWfEoDf4V9p9Y20CR&url=","ext":{"flag":["ziqie","youku","优酷","qiyi","爱奇艺","奇艺","mgtv","芒果","qq","腾讯"]}},
{"name":"我爱电影网","type":1,"url":"https://jhpc.manduhu.com/j1217.php?url=","ext":{"flag":["qiyi","爱奇艺","奇艺","mgtv","芒果","youku","优酷","pptv","PPTV"]}},
{"name":"王牌","type":1,"url":"https://za.kuanjv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{"name":"盘古解析","type":1,"url":"https://json.pangujiexi.com:12345/json.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果"]}},
{"name":"杰森","type":0,"url":"https://jx.jsonplayer.com/player/?url="}, 
{"name":"A12","type":0,"url":"https://jx.quankan.app/?url="},
{"name":"A14","type":0,"url":"https://www.pangujiexi.com/pangu/?url="},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"👉嗅探👈就是破解中，請等候一會👈","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}
],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",
"rules": [
{"name": "proxy","hosts": [  "raw.githubusercontent.com",  "googlevideo.com",  "googleapis.com",  "cdn.v82u1l.com",  "cdn.iz8qkg.com",  "cdn.kin6c1.com",  "c.biggggg.com",  "c.olddddd.com",  "haiwaikan.com",  "www.histar.tv",  "youtube.com",  "uhibo.com",  ".*boku.*",  ".*nivod.*",  ".*ulivetv.*"]},
{"name": "火山嗅探","hosts": [  "huoshan.com"],"regex": [  "item_id="]},
{"name": "抖音嗅探","hosts": [  "douyin.com"],"regex": [  "is_play_url="]},
{"name": "農民嗅探","hosts": [  "toutiaovod.com"],"regex": [  "video/tos/cn"]},
{"name": "七新嗅探","hosts": [  "api.52wyb.com"],"regex": [  "m3u8?pt=m3u8"]},
{"name": "毛驢點擊","hosts": [  "www.maolvys.com"],"script": [  "document.getElementsByClassName('swal-button swal-button--confirm')[0].click()"]}
],
"ads": ["static-mozai.4gtv.tv","s3t3d2y8.afcdn.net"]

}