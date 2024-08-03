function main(item) {
	const url = item.url;
	let mac = jz.getQuery(url, "mac");
	if (mac == null){
		mac = jz.getCache("ethtv.mac");
		if (mac == null){
			mac = 'xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx-xx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0,
					v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			}).replace(/-/g,"");
			jz.setCache("ethtv.mac", mac, 0);
		}
	}

	let uuid = jz.getQuery(url, "uuid");
	if (uuid == null){
		uuid = jz.getCache("ethtv.uuid");
		if (uuid == null){
			uuid = 'xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0,
					v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			}).replace(/-/g,"");
			jz.setCache("ethtv.uuid", uuid, 0);
		}
	}
	
	let etoken = jz.getQuery(url, "etoken");
	if (etoken == null){
		etoken = "1c8c47becf333f1a2e51404bd5ed3fcb805ae7eef235a1b8d9ea5fda872b7c78";
	}
	
	let version = jz.getQuery(url, "version");
	if (version == null){
		version = "20240705";
	}
	
    const config_url = `http://newapp.tv6868.com/${etoken}/${mac}/${uuid}/` + new Date().getTime() + `/${version}/config`;
    const tvbox_live_url = JSON.parse(jz.get(config_url)).lives[0].url.replace("{uuid}", uuid).replace('{mac}', mac).replace('{etoken}', etoken);
    const tvbox_playlist = JSON.parse(jz.get(tvbox_live_url));
    
    const groups = [];
    tvbox_playlist.forEach((tvbox_group) => {
        let group = {};
        group.name = tvbox_group.name;
        group.channels = [];
        tvbox_group.channel.forEach((tvbox_channel) => {
            let channel = {};
            channel.name = tvbox_channel.name;
            channel.sources = [{url: tvbox_channel.urls[0]}];
            group.channels.push(channel);
        })
        groups.push(group);
    });
    return  { groups: groups };
}