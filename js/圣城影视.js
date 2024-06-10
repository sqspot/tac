var rule = {
     title: '圣城影视',
     host: 'https://sc1080.top',
     searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
     url: '/index.php/vod/show/id/fyclass/page/fypage.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'
     },
     class_name:'电影&电视剧&综艺&动漫',
     class_url:'1&2&3&4',
     //cate_exclude: '网址',
     //class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
     play_parse: true,
     lazy: '',
     limit: 6,
     推荐: '*',
     double: true, // 推荐内容是否双层定位
     一级: '.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
     二级: {
         "title": "h1&&Text;.tag-link&&Text",
         "img": ".module-item-pic&&img&&data-src",
         "desc": ".video-info-items:eq(3)&&Text;.video-info-items:eq(2)&&Text;.video-infs&&Text;.video-info-item:eq(1)&&Text;.video-info-items:eq(0)&&Text",
         "content": ".vod_content&&Text",
         "tabs": ".module-tab-item",
         "lists": ".module-player-list:eq(#id)&&.scroll-content&&a"
     },
     搜索: '.module-search-item;img&&alt;img&&data-src;.video-serial&&Text;a&&href'
    }