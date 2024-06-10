var rule={
		title:'浮生半日',
		host:'https://movie.fush8.com',
		url:'/vodshow/fyfilter-----fypage---{{fl.year}}.html',
		searchUrl:'/vodsearch/**----------fypage---.html',
		searchable:2,//是否启用全局搜索,
		quickSearch:0,//是否启用快速搜索,
		filterable:1,//是否启用分类筛选,
		
filter:{
	
    ASCCCS:[
                    //{'key':'clyss','name':'剧情','value':[{'n':'全部剧情','v':''},{'n':'喜剧','v':'%E5%96%9C%E5%89%A7'},{'n':'爱情','v':'%E7%88%B1%E6%83%85'},{'n':'恐怖','v':'%E6%81%90%E6%80%96'},{'n':'动作','v':'%E5%8A%A8%E4%BD%9C'},{'n':'科幻','v':'%E7%A7%91%E5%B9%BB'},{'n':'剧情','v':'%E5%89%A7%E6%83%85'},{'n':'战争','v':'%E6%88%98%E4%BA%89'},{'n':'警匪','v':'%E8%AD%A6%E5%8C%AA'},{'n':'犯罪','v':'%E7%8A%AF%E7%BD%AA'},{'n':'动画','v':'%E5%8A%A8%E7%94%BB'},{'n':'奇幻','v':'%E5%A5%87%E5%B9%BB'},{'n':'武侠','v':'%E6%AD%A6%E4%BE%A0'},{'n':'冒险','v':'%E5%86%92%E9%99%A9'},{'n':'枪战','v':'%E6%9E%AA%E6%88%98'},{'n':'悬疑','v':'%E6%82%AC%E7%96%91'},{'n':'惊悚','v':'%E6%83%8A%E6%82%9A'},{'n':'经典','v':'%E7%BB%8F%E5%85%B8'},{'n':'青春','v':'%E9%9D%92%E6%98%A5'},{'n':'文艺','v':'%E6%96%87%E8%89%BA'},{'n':'微电影','v':'%E5%BE%AE%E7%94%B5%E5%BD%B1'},{'n':'古装','v':'%E5%8F%A4%E8%A3%85'},{'n':'历史','v':'%E5%8E%86%E5%8F%B2'},{'n':'运动','v':'%E8%BF%90%E5%8A%A8'},{'n':'农村','v':'%E5%86%9C%E6%9D%91'},{'n':'儿童','v':'%E5%84%BF%E7%AB%A5'},{'n':'网络电影','v':'%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1'}]},
                    {'key':'area','name':'地区','value':[{'n':'全部地区','v':''},{'n':'大陆','v':'%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86'},{'n':'香港','v':'%E4%B8%AD%E5%9B%BD%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'新加坡','v':'%E6%96%B0%E5%8A%A0%E5%9D%A1'},{'n':'德国','v':'%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'马来西亚','v':'%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A'},{'n':'印度','v':'%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'俄罗斯','v':'%E4%BF%84%E7%BD%97%E6%96%AF'},{'n':'澳大利亚','v':'%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
                    {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
                    {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]

                    },
                    
	filter_def:{
		
		ASCCCS:{cateId:'ASCCCS'}
		
	},
        class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
	    class_name:'午夜場',
        class_url:'ASCCCS',
        cate_exclude:'电影|连续剧|综艺|动漫|动画片|纪录片|福利|体育赛事|动作片|喜剧片|爱情片|灾难片|悬疑片|犯罪片|科幻片|恐怖片|魔幻片|剧情片|战争片|古装片|伦理片|电影解说|其他片|国产剧|港台剧|日韩剧|欧美剧|海外剧|泰剧|全部影片', 
		filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.clyss}}',
        play_parse:true,
		lazy:'',
		limit:6,
		推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
		double:true, // 推荐内容是否双层定位
		一级:'.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
		二级:{'title':'h1&&Text;.tag-link&&Text','img':'.module-item-pic&&img&&data-src','desc':'.video-info-items:eq(-2)&&Text;.video-info-items:eq(-1)&&Text;.video-info-items:eq(-2)&&Text;.video-info-items:eq(1)&&.video-info-item&&Text;.video-info-items:eq(0)&&.video-info-item&&Text','content':'.zkjj_a&&Text','tabs':'.module-tab-content&&.tab-item','lists':'.module-player-list:eq(#id)&&.scroll-content&&a'},
		搜索:'.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}
