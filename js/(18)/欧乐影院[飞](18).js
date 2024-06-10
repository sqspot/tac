var rule = Object.assign(muban.vfed,{
title:'欧乐影院',
host:'https://www.olevod.com',
'User-Agent':'MOBILE_UA',
//url: '/index.php/vod/show{{fl.a}}{{fl.by}}{{fl.c}}/id/fyclass/page/fypage{{fl.y}}.htmll',
url:'/index.php/vod/show/fyfilter.html',
filterable:1,//是否启用分类筛选,
filter: {
    
      '5':[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"5"},{"n":"欧美","v":"501"},{"n":"日韩","v":"502"},{"n":"动漫","v":"503"},{"n":"国产","v":"504"},{"n":"AV女优","v":"505"}]},{'key':'year','name':'年份','value':[{'n':'全部','v':''},{'n':'2024','v':'/year/2024'},{'n':'2023','v':'/year/2023'},{'n':'2022','v':'/year/2022'},{'n':'2021','v':'/year/2021'},{'n':'2020','v':'/year/2020'},{'n':'2019','v':'/year/2019'},{'n':'2018','v':'/year/2018'},{'n':'2017','v':'/year/2017'},{'n':'2016','v':'/year/2016'},{'n':'2015','v':'/year/2015'},{'n':'2014','v':'/year/2014'},{'n':'2013','v':'/year/2013'},{'n':'2012','v':'/year/2012'},{'n':'2011','v':'/year/2011'},{'n':'2010','v':'/year/2010'},{'n':'2009','v':'/year/2009'},{'n':'2008','v':'/year/2008'},{'n':'2007','v':'/year/2007'},{'n':'2006','v':'/year/2006'},{'n':'2005','v':'/year/2005'},{'n':'2004','v':'/year/2004'}]},{'key':'by','name':'排行','value':[{'n':'全部','v':''},{'n':'最新','v':'/by/time'},{'n':'新添加','v':'by/time_add'},{'n':'最热','v':'/by/hits'},{'n':'评分','v':'/by/score'}]}]   
 },
	filter_def:{
		
		5:{cateId:'5'}
		
	},
class_name:'午夜場',
class_url:'5',
filter_url:'{{fl.area}}/{{fl.by}}/id/{{fl.cateId}}/page/fypage{{fl.year}}',
cate_exclude:'电影|连续剧|综艺|动漫|午夜影院|VIP蓝光影院|电视直播',
class_parse:'ul.top_nav&&li;a&&Text;a&&href;./(\\d+).html',
推荐:'.cbox_list;ul&&li;a&&title;.lazyload&&data-original;.text_dy&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.vodlist&&li;a&&title;.lazyload&&data-original;.text_dy&&Text;a&&href',
二级:{'title':'.hd_tit&&Text;.content_min&&ul&&li&&Text','img':'.lazyload&&data-original','desc':';;;.content_min&&ul&&li:eq(2) a&&Text;.content_min&&ul&&li:eq(3) a&&Text','content':'.context&&span&&Text','tabs':'.play_source_tab&&.active','lists':'.content_playlist:eq(#id) li'},
搜索:'.vodlist&&li;*;*;*;*',
});