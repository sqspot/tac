var rule = Object.assign(muban.海螺: {	
            title: '泥视频',	
            host: 'https://www.nivod.tv',	
            searchUrl: '/index.php/vod/search/page/fypage/wd/**/',	
            url: '/index.php/vod/show/id/fyclass/page/fypage/',	
            headers: {	
                'User-Agent': 'MOBILE_UA'	
            },	
            timeout: 5000,	
            class_parse: '#nav-bar li;a&&Text;a&&href;id/(.*?)/',	
            limit: 40,	
            play_parse: true,	
            lazy: '',	
            推荐: '.list-a.size;li;a&&title;.lazy&&data-original;.bt&&Text;a&&href',	
            double: true,	
            一级: '.list-a&&li;a&&title;.lazy&&data-original;.list-remarks&&Text;a&&href',	
            二级: {	
                "title": "h2&&Text;.deployment&&Text",	
                "img": ".lazy&&data-original",	
                "desc": ".deployment&&Text",	
                "content": ".ec-show&&Text",	
                "tabs": "#tag&&a",	
                "lists": ".play_list_box:eq(#id)&&li"	
            },	
            搜索: '.search-list;a&&title;.lazy&&data-original;.deployment&&Text;a&&href',	
            searchable: 2,//是否启用全局搜索,	
            quickSearch: 0,//是否启用快速搜索,	
            filterable: 0,//是否启用分类筛选,	
        });	
