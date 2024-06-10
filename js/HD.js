var rule = {
     title:'HDmoli',
    host:'https://www.singyulh.cc',
    // homeUrl:'/',
    url:'/index.php/vodtype/fyclass-fypage.html',
    //searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:0,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.nav&&ul&&li;a&&Text;a&&href;/(\\d+).html',
	cate_exclude:'留言|APP',
    play_parse:true,
    lazy:'',
    limit:8,
    推荐:'.tab-bd&&ul;li;a&&title;img&&src;.item-auxiliary&&Text;a&&href',
   
    double:true, // 推荐内容是否双层定位
    一级:'.row&&li;a&&title;img&&src;item-auxiliary&&Text;a&&href',
    二级:'*',
    //二级:{"title":"h1.f-20&&Text;.video-info-aux&&Text","img":"src","content":".content.vod_content&&Text","tabs":".video-tips&&script","lists":".player_data:eq(#id) a"},
    
}
