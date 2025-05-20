//clan://localhost/drpy/js繼承.json

{
"spider":"./jar/fm.jar",
    "sites" : [
{'key':'drpy','name':'豆瓣2🔎','type':3,'api':'clan://drpy/lib/drpy2.min.js','ext':'clan://drpy/js/drpy.js'},
{"key" : "量子影视2","name" : "量子影视","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/量子影视.js"},
{"key" : "继承mxpro","name" : "继承mxpro","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承mxpro.js"},
{"key" : "继承mxone5","name" : "继承mxone5","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承mxpro.js"},
{"key" : "继承首图","name" : "继承首图","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承首图.js"},
{"key" : "继承首图2","name" : "继承首图2","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承首图2.js"},
{"key" : "继承vfe","name" : "继承vfe","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承vfe.js"},
{"key" : "继承海螺3","name" : "继承海螺3","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承海螺3.js"},
{"key" : "继承海螺2","name" : "继承海螺2","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承海螺2.js"},
{"key" : "继承短视","name" : "继承短视","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承短视.js"},
{"key" : "继承","name" : "继承","type" : 3,"api" : "clan://drpy/lib/drpy2.min.js","ext" : "clan://drpy/繼承/继承.js"}
],

    "lives" : [
            {
            "group" : "redirect",
            "channels" : [
                    {
                    "name" : "live",
                    "urls" : [
                        "proxy://do=live&type=txt&ext=http://111.67.196.181/mtv/zhibo.txt"]
                }]
        }],
"doh":[{"name":"Google","url":"https://dns.google/dns-query","ips":["8.8.4.4","8.8.8.8"]},{"name":"Cloudflare","url":"https://cloudflare-dns.com/dns-query","ips":["1.1.1.1","1.0.0.1","2606:4700:4700::1111","2606:4700:4700::1001"]},{"name":"AdGuard","url":"https://dns.adguard.com/dns-query","ips":["94.140.14.140","94.140.14.141"]},{"name":"DNSWatch","url":"https://resolver2.dns.watch/dns-query","ips":["84.200.69.80","84.200.70.40"]},{"name":"Quad9","url":"https://dns.quad9.net/dns-quer","ips":["9.9.9.9","149.112.112.112"]}],
"rules":[{"name":"proxy","hosts":["raw.githubusercontent.com","googlevideo.com","cdn.v82u1l.com","cdn.iz8qkg.com","cdn.kin6c1.com","c.biggggg.com","c.olddddd.com","haiwaikan.com","www.histar.tv","youtube.com","uhibo.com",".*boku.*",".*nivod.*",".*ulivetv.*"]},{"name":"海外看","hosts":["haiwaikan"],"regex":["10.0099","10.3333","16.0599","8.1748","10.85"]},{"name":"索尼","hosts":["suonizy"],"regex":["15.1666","15.2666"]},{"name":"暴風","hosts":["bfzy"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:3,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},{"name":"星星","hosts":["aws.ulivetv.net"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:8,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},{"name":"量子","hosts":["vip.lz","hd.lz","v.cdnlz"],"regex":["18.5333"]},{"name":"非凡","hosts":["vip.ffzy","hd.ffzy"],"regex":["25.0666"]},{"name":"火山嗅探","hosts":["huoshan.com"],"regex":["item_id="]},{"name":"抖音嗅探","hosts":["douyin.com"],"regex":["is_play_url="]},{"name":"農民嗅探","hosts":["toutiaovod.com"],"regex":["video/tos/cn"]}],
"parses":[
//{"name":"超解","type":4,"url":"12"},
//{"name":"聚合1","type":3,"url":"Demo"},
//{"name":"聚合0","type":3,"url":"Web"},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name":"杰森","type":0,"url":"https://jx.jsonplayer.com/player/?url="}, 
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"A01","type":0,"url":"http://api.apii.top/?v="},
{"name":"A05","type":0,"url":"http://www.wpsseo.cn/line.php?n=7&url="},
{"name":"A12","type":0,"url":"https://jx.quankan.app/?url="},
{"name":"A14","type":0,"url":"https://www.pangujiexi.com/pangu/?url="},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"战狼","type":0,"url":"https://jx.zhanlangbu.com/?url="},
//{"name":"ok","type":0,"url":"https://okjx.cc/?url="},
//{"name":"bozrc","type":0,"url":"https://jx.bozrc.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","leshi","LS","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":""}}},
//{"name":"不累","type":0,"url":"https://blbfq.f3322.net/player/analysis.php?v=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
//{"name":"cod","type":0,"url":"https://ksksl.codjx.com/?url="},
//{"name":"byg解析","type":0,"url":"https://byg.ziqj5.shop/?url="},
//{"name":"xmflv","type":0,"url":"https://jx.xmflv.com/?url="},
//{"name":"🌕365","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"26db","type":0,"url":"http://vip.26db.cn/g/?url="},
//{"name":"FreeOK","type":0,"url":"https://play.86516.tk/OKPlayer/?url="},
//{"name":"free","type":0,"url":"https://h5.freejson.xyz/player/?url="},
//{"name":"優酷","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url="},
//{"name":"騰訊","type":1,"url":"http://xn--wnup5g.xn--z7x900a.love:63/Art1/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"]}},
//{"name":"6号线","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"7号线","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"10号线","type":1,"url":"http://json.youguo520.top/fufeng/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
//{"name":"11号线","type":1,"url":"https://jx.4kdv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"13号线","type":0,"url":"https://www.ckmov.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"14号线","type":1,"url":"https://api.jiexi.la/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"15号线","type":0,"url":"https://www.nxflv.com/?url="},
//{"name":"18号线","type":0,"url":"https://jx.ccabc.cc/byg/?url="},
//{"name":"19号线","type":0,"url":"https://jx.zhanlangbu.com/?url=","ext":{"header":{"User-Agent":"okhttp/4.1.0"},"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
//{"name":"20号线","type":1,"url":"http://lanlan.ckflv.cn/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
//{"name":"22号线","type":0,"url":"http://jx.ivito.cn/?url="},
//{"name":"23号线","type":0,"url":"https://dm.xbqgx.com/?url="},
//{"name":"24号线","type":0,"url":"https://vip.bljiex.com/?v="},
//{"name":"A02","type":0,"url":"https://jx.aidouer.net/?url="},
//{"name":"A03","type":0,"url":"http://vip.xxphp.cn/player.html?url="},
//{"name":"A04","type":0,"url":"https://55o.co/?url="},
//{"name":"A06","type":0,"url":"https://player.nineqing.net/jx/?url="},
//{"name":"A07","type":0,"url":"https://player.nineqing.com/?url="},
//{"name":"A08","type":0,"url":"https://jx.videojx.cn:5656/?url="},
//{"name":"A09","type":0,"url":"https://www.1717yun.com/1717yun/?url="},
//{"name":"A10","type":0,"url":"https://freejx.rx88.top:1234/?url="},
//{"name":"A11","type":0,"url":"https://player.maqq.cn/?url="},
//{"name":"A13","type":0,"url":"https://lziplayer.com/?url="},
{"name":"👉嗅探👈就是破解中，請等候一會👈","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",
"ads":["mozai.4gtv.tv"]

}