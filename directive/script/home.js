
define(['app',
		'newsService'
	],function(app){
	app.directive('home',['newsService',function(newsService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/home.html',
			link:function(scope,elements,attrs){

				scope.bigTitle ={
					cn:'数据即资产 不用即贬值',
					bigcn:'全渠道零售下的商品数据服务',
					en:'COMMODITY DATA SERVICES UNDER FULL CHANNEL RETAILING'
				};

				//获取近三月新闻
				scope.newsMoths = function(){
					newsService.newsMonths()
					.success(function(data){
						//console.log("newsmonth",data);
						scope.newsMonthsData = data;
					})
				};

				//获取6条新闻
				scope.newsList = function(){
					newsService.newsList()
					.success(function(data){
						//console.log("newsList",data);
						scope.newsListData = data;
					})
				};

				//新闻详细信息
				scope.linkToNewsDetail = function(id){
					var id = id-0;
					newsService.newsDetail(id)
					.success(function(data){
						console.log("detail",data);
					});
				};

				scope.newsMoths();
				scope.newsList();
			}
		};
	}]);
});
	