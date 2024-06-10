var rule = {
    title:'多瑙影视',
    host:'https://www.duonaovod.com',
    // homeUrl:'/',
    url:'/index.php/vod/show/fyfilter/id/fyclass\{{fl.id}}/page/fypage{{fl.year}}.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.top_nav&&ul li:gt(0):lt(25);a&&Text;a&&href;.*/(.*?).html',
//    class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港台剧&日韩剧&欧美剧&海外剧',
//    class_url:'1&2&3&4&20&13&14&15&16&31',
filter:{
	34:[
//{'key':'id','name':'类型','value':[{"n":"全部","v":""},{"n":"动作片","v":"/id/6"},{"n":"喜剧片","v":"/id/7"},{"n":"爱情片","v":"/id/8"},{"n":"科幻片","v":"/id/9"},{"n":"恐怖片","v":"/id/10"},{"n":"剧情片","v":"/id/11"},{"n":"奇幻片","v":"/id/30"},{"n":"战争片","v":"/id/12"},{"n":"犯罪片","v":"/id/54"},{"n":"动漫电影","v":"/id/55"},{"n":"伦理片","v":"/id/34"}]},
        {'key':'clyss','name':'剧情','value':[{"n":"全部","v":""},{"n":"喜剧","v":"/class/%E5%96%9C%E5%89%A7"},{"n":"爱情","v":"/class/%E7%88%B1%E6%83%85"},{"n":"恐怖","v":"/class/%E6%81%90%E6%80%96"},{"n":"动作","v":"/class/%E5%8A%A8%E4%BD%9C"},{"n":"科幻","v":"/class/%E7%A7%91%E5%B9%BB"},{"n":"剧情","v":"/class/%E5%89%A7%E6%83%85"},{"n":"战争","v":"/class/%E6%88%98%E4%BA%89"},{"n":"警匪","v":"/class/%E8%AD%A6%E5%8C%AA"},{"n":"犯罪","v":"/class/%E7%8A%AF%E7%BD%AA"},{"n":"动画","v":"/class/%E5%8A%A8%E7%94%BB"},{"n":"奇幻","v":"/class/%E5%A5%87%E5%B9%BB"},{"n":"武侠","v":"/class/%E6%AD%A6%E4%BE%A0"},{"n":"冒险","v":"/class/%E5%86%92%E9%99%A9"},{"n":"枪战","v":"/class/%E6%9E%AA%E6%88%98"},{"n":"恐怖","v":"/class/%E6%81%90%E6%80%96"},{"n":"悬疑","v":"/class/%E6%82%AC%E7%96%91"},{"n":"惊悚","v":"/class/%E6%83%8A%E6%82%9A"},{"n":"经典","v":"/class/%E7%BB%8F%E5%85%B8"},{"n":"青春","v":"/class/%E9%9D%92%E6%98%A5"},{"n":"文艺","v":"/class/%E6%96%87%E8%89%BA"},{"n":"微电影","v":"/class/%E5%BE%AE%E7%94%B5%E5%BD%B1"},{"n":"古装","v":"/class/%E5%8F%A4%E8%A3%85"},{"n":"历史","v":"/class/%E5%8E%86%E5%8F%B2"},{"n":"运动","v":"/class/%E8%BF%90%E5%8A%A8"},{"n":"农村","v":"/class/%E5%86%9C%E6%9D%91"},{"n":"儿童","v":"/class/%E5%84%BF%E7%AB%A5"},{"n":"网络电影","v":"/class/%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1"}]},
        {'key':'area','name':'地区','value':[{"n":"全部","v":""},{"n":"大陆","v":"/area/%E5%A4%A7%E9%99%86"},{"n":"香港","v":"/area/%E9%A6%99%E6%B8%AF"},{"n":"台湾","v":"/area/%E5%8F%B0%E6%B9%BE"},{"n":"美国","v":"/area/%E7%BE%8E%E5%9B%BD"},{"n":"法国","v":"/area/%E6%B3%95%E5%9B%BD"},{"n":"英国","v":"/area/%E8%8B%B1%E5%9B%BD"},{"n":"日本","v":"/area/%E6%97%A5%E6%9C%AC"},{"n":"韩国","v":"/area/%E9%9F%A9%E5%9B%BD"},{"n":"德国","v":"/area/%E5%BE%B7%E5%9B%BD"},{"n":"泰国","v":"/area/%E6%B3%B0%E5%9B%BD"},{"n":"印度","v":"/area/%E5%8D%B0%E5%BA%A6"},{"n":"意大利","v":"/area/%E6%84%8F%E5%A4%A7%E5%88%A9"},{"n":"西班牙","v":"/area/%E8%A5%BF%E7%8F%AD%E7%89%99"},{"n":"加拿大","v":"/area/%E5%8A%A0%E6%8B%BF%E5%A4%A7"},{"n":"其他","v":"/area/%E5%85%B6%E4%BB%96"}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'/year/2024'},{'n':'2023','v':'/year/2023'},{'n':'2022','v':'/year/2022'},{'n':'2021','v':'/year/2021'},{'n':'2020','v':'/year/2020'},{'n':'2019','v':'/year/2019'},{'n':'2018','v':'/year/2018'},{'n':'2017','v':'/year/2017'},{'n':'2016','v':'/year/2016'},{'n':'2015','v':'/year/2015'},{'n':'2014','v':'/year/2014'},{'n':'2013','v':'/year/2013'},{'n':'2012','v':'/year/2012'},{'n':'2011','v':'/year/2011'},{'n':'2010','v':'/year/2010'},{'n':'2009','v':'/year/2009'},{'n':'2008','v':'/year/2008'},{'n':'2007','v':'/year/2007'},{'n':'2006','v':'/year/2006'},{'n':'2005','v':'/year/2005'},{'n':'2004','v':'/year/2004'}]},{'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'時間','v':'/by/time'},{'n':'人氣','v':'/by/hits'},{'n':'評分','v':'/by/score'}]}]
	
       
        },
    filter_url:'{{fl.area}}{{fl.by}}{{fl.clyss}}',
    class_name:'午夜場',
    class_url:'34',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    二级:{"title":"h2&&Text;.text-muted:eq(-1)&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl&&ul&&li:eq(0)&&Text;.content_detail.content_min.fl&&ul&&li:eq(2)&&Text;.content_detail.content_min.fl&&ul&&li:eq(3)&&a&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".content_playlist:eq(#id) li"},
    搜索:'body .searchlist_item;a&&title;.vodlist_thumb.lazyload&&data-original;.pic_text.text_right&&Text;a&&href',
}

