muban.首图.二级.title = 'h1&&Text;p.data:eq(0)&&Text';
muban.首图.二级.desc = 'p.data--span:eq(3)&&Text;;;p.data--span:eq(1)&&Text;p.data--span:eq(2)&&Text';
muban.首图.二级.tabs = '.myui-panel__head.bottom-line h3';
var rule = {
	title:'剧迷',
	模板:'首图',
	host:'https://gmtv1.xyz',
	// url:'/genre/fyclass---fypage.html',
	url:'/genre/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.year}}-fypage{{fl.by}}',
	filter: {
		"tvseries":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"tvseries"},{"n":"国产剧","v":"cn"},{"n":"韩剧","v":"kr"},{"n":"美剧","v":"us"},{"n":"日剧","v":"jp"},{"n":"台剧","v":"tw"},{"n":"港剧","v":"hk"},{"n":"海外剧","v":"ot"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"欧美","v":"欧美"},{"n":"大陆","v":"大陆"},{"n":"中国大陆","v":"中国大陆"},{"n":"内地","v":"内地"},{"n":"中国","v":"中国"},{"n":"台湾","v":"台湾"},{"n":"中国台湾","v":"中国台湾"},{"n":"韩国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"日韩","v":"日韩"},{"n":"日本","v":"日本"},{"n":"英国","v":"英国"},{"n":"泰国","v":"泰国"},{"n":"欧洲","v":"欧洲"},{"n":"法国","v":"法国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"}]},{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"}]}],
		"movies":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"movies"},{"n":"剧情片","v":"drama"},{"n":"动作片","v":"action"},{"n":"科幻片","v":"scifi"},{"n":"喜剧片","v":"comedy+"},{"n":"爱情片","v":"romance"},{"n":"战争片","v":"war"},{"n":"奇幻片","v":"fantasy"},{"n":"恐怖片","v":"horror"},{"n":"纪录片","v":"documentary+"},{"n":"动画电影","v":"animation"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"欧美","v":"欧美"},{"n":"大陆","v":"大陆"},{"n":"中国大陆","v":"中国大陆"},{"n":"内地","v":"内地"},{"n":"中国","v":"中国"},{"n":"台湾","v":"台湾"},{"n":"中国台湾","v":"中国台湾"},{"n":"韩国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"日韩","v":"日韩"},{"n":"日本","v":"日本"},{"n":"英国","v":"英国"},{"n":"泰国","v":"泰国"},{"n":"欧洲","v":"欧洲"},{"n":"法国","v":"法国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"}]},{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"}]}],
		"tv_show":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"中国大陆","v":"中国大陆"},{"n":"韩国","v":"韩国"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"欧美","v":"欧美"},{"n":"日本","v":"日本"},{"n":"香港","v":"香港"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"}]}],
		"anime":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"欧美","v":"欧美"},{"n":"大陆","v":"大陆"},{"n":"台湾","v":"台湾"},{"n":"香港","v":"香港"},{"n":"韩国","v":"韩国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"}]}]
	},
	filter_def:{
		tvseries:{cateId:'tvseries',by:'/by/time'},
		movies:{cateId:'movies',by:'/by/time'},
		tv_show:{cateId:'tv_show',by:'/by/time'},
		anime:{cateId:'anime',by:'/by/time'}
	},
	searchUrl:'/search/**----------fypage---.html',
	class_parse: 'ul.myui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
	一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
}