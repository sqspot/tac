var rule={
    title:'蛋蛋赞',
    host:'https://www.dandanzan10.top',
    // homeUrl:'/',
    //url:'/fyclass/index_fypage.html[/fyclass/index.html]',   
    url:'/fyclass/fyfilter-fypage-{{fl.by}}.html',   
    searchUrl:'/so/**-**--.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // 'Cookie': 'searchneed=ok'
    },
    filter:{
	dianying:[
        {'key':'clyss','name':'剧情','value':[{'n':'全部','v':''},{'n':'伦理','v':'伦理'}]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'中国大陆','v':'中国大陆'},{'n':'美国','v':'美国'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'日本','v':'日本'},{'n':'韩国','v':'韩国'},{'n':'英国','v':'英国'},{'n':'法国','v':'法国'},{'n':'德国','v':'德国'},{'n':'意大利','v':'意大利'},{'n':'西班牙','v':'西班牙'},{'n':'印度','v':'印度'},{'n':'泰国','v':'泰国'},{'n':'俄罗斯','v':'俄罗斯'},{'n':'伊朗','v':'伊朗'},{'n':'加拿大','v':'加拿大'},{'n':'澳大利亚','v':'澳大利亚'},{'n':'爱尔兰','v':'爱尔兰'},{'n':'瑞典','v':'瑞典'},{'n':'巴西','v':'巴西'},{'n':'丹麦','v':'丹麦'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'按时间','v':'newstime'},{'n':'按人气','v':'onclick'},{'n':'按评分','v':'rating'}]}]
	

        },
        filter_def:{
		
		dianying:{cateId:'dianying'}
	},
    filter_url:'{{fl.clyss}}-{{fl.area}}-{{fl.year}}',
    class_name:'dianying',
    class_url:'dianying',

   推荐:'div.lists-content;li;h2&&Text;.thumb&&src;.note&&Text;a&&href',  
 
   一级:'.lists-content:eq(1)&&ul&&li;img&&alt;.thumb&&src;.note&&Text;a&&href',

    double:true, // 推荐内容是否双层定位
   二级:{'title':'h1&&Text;.product-excerpt:eq(2)&&Text','img':'.thumb&&src','desc':';;.product-excerpt:eq(3)&&Text;.product-excerpt:eq(1)&&Text;.product-excerpt:eq(0)&&Text','content':'.product-excerpt:eq(5)&&Text','tabs':'.playlists dl dt','lists':'.play-div-oa:eq(#id) li'},
   搜索:'.lists-content&&ul&&li;*;*;*;*',
}