var rule = {
	title:'XVIDEOS',
	host:'https://www.xvideos.com/',
    url:'/lang/fyclass/fypage',
    searchUrl:'/?k=**',
    searchable:1,
    quickSearch:0,
    class_name:'中文&日本&烏克蘭&保加利亞&克羅地亞&捷克&丹麥&荷蘭&愛沙尼亞&芬蘭&法國&德國&希臘&希伯來&印地&匈牙利&印尼&意大利&韓國&拉脫維亞&立陶宛&馬來&挪威&波斯&波蘭&葡萄牙&羅馬尼亞&俄國&塞爾維亞&斯洛伐克&斯洛文尼亞&西班牙&瑞典&泰國&土耳其&烏爾都&越南&阿拉伯',
    class_url:'chinese&japanese&ukrainian&bulgarian&hrvatski&cestina&dansk&nederlands&eesti&suomi&francais&deutsch&greek&hebrew&hindi&magyar&indonesia&italiano&korean&latviesu&lietuviu&melayu&norsk&persian&polski&portugues&romana&russian&srpski&slovencina&slovenscina&espanol&svenska&thai&turkce&urdu&viet_nam',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:true,
    推荐:'*',
    一级:'div.mozaique&&.frame-block;.title&&Text;img&&data-src;.video-hd-mark&&Text;a&&href',
    二级: {
    "title": ".page-title&&Text",  // 标题选择器
    "img": "img&&data-src",   // 图片选择器
    "desc": ".info-table-val:eq(1)&&Text;.info-table-val:eq(2)&&Text;.info-table-val:eq(3)&&Text",   // 简介选择器
    "content": "h2&&Text", // 内容选择器
    "tabs": "", // 标签选择器
    "lists": ".view-more-li:eq(#id)&&" // 列表选择器
    },
    搜索:'*',
}
