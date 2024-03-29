
define(['app'],function(app){
	app.service("newsService",['$http',function($http){
		this.version = function(){
			return 'lingmall scaffolding version 0.1.0';
		};

		var newsServiceUrl = 'http://192.168.1.241:8010';

		var urlDict = {
			newsClassify:'/article/articleList',
			newsList :'/article/newList',
			newsMonths:'/article/monthList',
			newsDetail:'/article/detail'
		};

		var methodDirct = {
			post:'POST',
			get:'GET',
			put:'PUT',
			delete:'DELETE'
		};

		this.newsClassify = function(classifyId,pageSize,pageIndex){
			var headers = {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			};
			return $http({
				headers:headers,
				url:newsServiceUrl+urlDict.newsClassify,
				method:methodDirct.post,

				data:{
					classifyId:classifyId,//1=>集团动态2=>业务动态3=>行业动态4=>通知动态
					pageSize:pageSize,
					page:pageIndex
				}
			});
		};

		this.newsList = function(){
			var headers = {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			};
			return $http({
				headers:headers,
				url:newsServiceUrl+urlDict.newsList,
				method:methodDirct.post,

			})
		};

		this.newsMonths = function(){
			return $http({
				url:newsServiceUrl+urlDict.newsMonths,
				method:methodDirct.post,

			})
		};

		this.newsDetail = function(id){
			var headers = {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			};
			return $http({
				headers:headers,
				url:newsServiceUrl+urlDict.newsDetail,
				method:methodDirct.post,
				data: {
					id:id
				}
			})
		};
	}]);
});
	