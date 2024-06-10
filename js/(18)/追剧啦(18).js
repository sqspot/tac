var rule = {
    title:'追剧啦',
    host:'https://www.zhuiju.la',
    // homeUrl:'/',
    //url:'/vodshow/fyclass-fyfilter-----fypage---{{fl.year}}.html',
    url:'/vodshow/fyfilter.html',
    //filter_url:'{{fl.c}}-{{fl.by}}-{{fl.area}}',
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:1,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },

    filter:{
        
        '61':[{'key':'class','name':'類別','value':[{'n':'全部','v':''},{'n':'伦理','v':'伦理'},{'n':'香港三级','v':'香港三级'},{'n':'韩国伦理','v':'韩国伦理'},{'n':'日本伦理','v':'日本伦理'},{'n':'西方伦理','v':'西方伦理'},{'n':'写真资源','v':'写真资源'},{'n':'动漫','v':'动漫'},{'n':'两性课堂','v':'两性课堂'}]},{'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'%E5%A4%A7%E9%99%86'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'德国','v':'%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'印度','v':'%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},{'key':'year','name':'年份','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'}]},{'name':'排序','key':'by','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]
        },
	filter_def:{
		
		61:{cateId:'61'}
	},
        
    class_name:'午夜場',
    class_url:'61',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-items;.module-item;.module-item-cover&&.module-item-pic&&a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    //推荐:'.module-item;.module-item-cover&&.module-item-pic;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    //一级:'.module-list&&.module-item-pic;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    一级:'.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1.page-title&&Text;.video-info-aux&&Text","img":".lazyload&&data-src","desc":".video-info-items:eq(-1)&&Text;.video-info-items:eq(-3)&&Text;.video-info-items:eq(-2)&&Text;.video-info-items:eq(1)&&.video-info-item.video-info-actor&&Text;.video-info-items:eq(0)&&.video-info-item.video-info-actor&&Text","content":".video-info-items:eq(5)&&Text","tabs":".module-tab-item.tab-item","lists":".module-blocklist.scroll-box:eq(#id) a"},
    搜索:'.module-search-item;h3&&Text;img&&data-src;.module-item-text&&Text;a&&href',
 }
