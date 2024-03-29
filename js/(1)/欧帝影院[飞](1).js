var rule={
    title:'欧帝影院',
    host:'https://www.odivod.com',
    // homeUrl:'/',
    url:'/vodshow/fyclass-fyfilter------fypage---{{fl.year}}.html',
    searchUrl:'/vodsearch/**----------fypage---/',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // 'Cookie': 'searchneed=ok' 
    },
    //class_parse:'.conch-nav&&ul&&li;a&&Text;a&&href;./(\\d+).html',
    //cate_exclude:'',
    filter:{
	1:[
        // {'key':'id','name':'类型','value':[{'n':'全部','v':'1'},{'n':'动作片','v':'6'},{'n':'惊悚片','v':'97'},{'n':'喜剧片','v':'7'},{'n':'爱情片','v':'8'},{'n':'科幻片','v':'9'},{'n':'恐怖片','v':'10'},{'n':'剧情片','v':'11'},{'n':'战争片','v':'12'},{'n':'冒险片','v':'65'},{'n':'犯罪片','v':'61'},{'n':'灾难片','v':'67'},{'n':'奇幻片','v':'70'},{'n':'经典片','v':'71'},{'n':'动画片','v':'68'},{'n':'悬疑片','v':'73'},{'n':'歌舞片','v':'66'},{'n':'网络电影','v':'72'},{'n':'同性片','v':'69'},{'n':'记录片','v':'25'}]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'大陆'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'歐美','v':'欧美'},{'n':'美国','v':'美国'},{'n':'法国','v':'法国'},{'n':'英国','v':'英国'},{'n':'日本','v':'日本'},{'n':'韩国','v':'韩国'},{'n':'德国','v':'德国'},{'n':'泰国','v':'泰国'},{'n':'印度','v':'印度'},{'n':'意大利','v':'意大利'},{'n':'西班牙','v':'西班牙'},{'n':'加拿大','v':'加拿大'},{'n':'其他','v':'其他'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	2:[
        // {'key':'id','name':'类型','value':[{'n':'全部','v':'2'},{'n':'国产剧','v':'74'},{'n':'香港剧','v':'13'},{'n':'台湾剧','v':'75'},{'n':'韩国剧','v':'76'},{'n':'日本剧','v':'77'},{'n':'欧美剧','v':'78'},{'n':'泰国剧','v':'79'},{'n':'新马剧','v':'80'},{'n':'其他剧','v':'81'}]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'大陆'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'歐美','v':'欧美'},{'n':'日本','v':'日本'},{'n':'韩国','v':'韩国'},{'n':'泰国','v':'泰国'},{'n':'印度','v':'印度'},{'n':'美国','v':'美国'},{'n':'法国','v':'法国'},{'n':'英国','v':'英国'},{'n':'德国','v':'德国'},{'n':'意大利','v':'意大利'},{'n':'西班牙','v':'西班牙'},{'n':'加拿大','v':'加拿大'},{'n':'其他','v':'其他'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	3:[
        // {'key':'id','name':'类型','value':[{'n':'全部','v':'3'},{'n':'国产综艺','v':'88'},{'n':'港台综艺','v':'91'},{'n':'韩国综艺','v':'92'},{'n':'日本综艺','v':'94'},{'n':'欧美综艺','v':'95'},{'n':'新马泰综艺','v':'96'},{'n':'其他综艺','v':'98'}]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'大陆'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'歐美','v':'欧美'},{'n':'日本','v':'日本'},{'n':'韩国','v':'韩国'},{'n':'泰国','v':'泰国'},{'n':'印度','v':'印度'},{'n':'美国','v':'美国'},{'n':'法国','v':'法国'},{'n':'英国','v':'英国'},{'n':'德国','v':'德国'},{'n':'意大利','v':'意大利'},{'n':'西班牙','v':'西班牙'},{'n':'加拿大','v':'加拿大'},{'n':'其他','v':'其他'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	4:[
        // {'key':'id','name':'类型','value':[{'n':'全部','v':'4'},{'n':'国产动漫','v':'62'},{'n':'港台动漫','v':'93'},{'n':'日本动漫','v':'63'},{'n':'韩国动漫','v':'85'},{'n':'欧美动漫','v':'64'},{'n':'新马泰动漫','v':'86'},{'n':'其他动漫','v':'16'}]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'大陆'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'歐美','v':'欧美'},{'n':'美国','v':'美国'},{'n':'法国','v':'法国'},{'n':'英国','v':'英国'},{'n':'日本','v':'日本'},{'n':'韩国','v':'韩国'},{'n':'德国','v':'德国'},{'n':'泰国','v':'泰国'},{'n':'印度','v':'印度'},{'n':'意大利','v':'意大利'},{'n':'西班牙','v':'西班牙'},{'n':'加拿大','v':'加拿大'},{'n':'其他','v':'其他'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	21:[
        // {'key':'id','name':'类型','value':[{'n':'全部','v':'21'},{'n':'日本伦理','v':'22'},{'n':'韩国伦理','v':'41'},{'n':'香港三级','v':'40'},{'n':'西方伦理','v':'42'},{'n':'动漫伦理','v':'60'},{'n':'两性课堂','v':'53'},{'n':'美女写真','v':'52'}]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'国产','v':'国产'},{'n':'日本','v':'日本'},{'n':'欧美','v':'欧美'},{'n':'其他','v':'其他'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]

        },
    filter_url:'{{fl.area}}-{{fl.by}}',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'body&&.hl-list-wrap;ul&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    二级:{'title':'.hl-dc-title&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(-2)&&Text','img':'.hl-lazy&&data-original','desc':';;.hl-col-xs-12:eq(2)&&Text;.hl-col-xs-12:eq(3)&&Text;.hl-col-xs-12:eq(4)&&Text','content':'.hl-content-text&&Text','tabs':'.hl-plays-from a','lists':'.hl-plays-list:eq(#id) li'},
    搜索:'.hl-list-wrap&&ul&&li;.hl-item-thumb&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
}
