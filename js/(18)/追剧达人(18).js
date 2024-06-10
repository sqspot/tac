muban.mxpro.二级.desc = ';;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text'
muban.mxpro.二级.tabs = '.module-tab-items-box .module-tab-item'
var rule={
	title:'追剧达人',
	模板:'mxpro',
	host:'http://zjdr.tv',
	url:'/vodshowfyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.area}}{{fl.by}}{{fl.class}}/id/{{fl.cateId}}/page/fypage{{fl.year}}',
	filter: {"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"6"},{"n":"喜剧片","v":"7"},{"n":"爱情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"恐怖片","v":"10"},{"n":"剧情片","v":"11"},{"n":"战争片","v":"12"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"情色","v":"/class/情色"},{"n":"伦理","v":"/class/伦理"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"},{"n":"1999","v":"/year/1999"},{"n":"1998","v":"/year/1998"},{"n":"1997","v":"/year/1997"},{"n":"1996","v":"/year/1996"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]},
	filter_def:{
		1:{cateId:'1'}
		
	},
	class_parse: '.navbar-items li:gt(1):lt(8);a&&Text;a&&href;/(\\d+).html',
	//tab_exclude:'App专享',
	cate_exclude:'连续剧|综艺|动漫|App专享',
	// searchUrl:'/vod/search/page/fypage/wd/**.html',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
	detailUrl:'/Moviedetail/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}
