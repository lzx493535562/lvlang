
define(['app',
		'pager',
		'newsService'
	],function(app){
	app.directive('newsCenter',["newsService",'$location',function(newsService,$location){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/newsCenter.html',
			link:function($scope,$elements,$attrs){
				$scope.pageIndex = 0;
				$scope.pageCount = 0;
				$scope.pageSize = 6;


				$scope.bigTitle = {
					cn :'绿浪深耕电商领域',
					bigcn:'发现数字商品未来与机遇',
					en:'DIGITAL COMMODITIES IN THE FUTURE AND OPPORTUNITIES',
				};
				$scope.menuList = {
					title:{cn:'新闻中心',en:'NEWS CENTER'}, 
					list:[
						{cn:'集团动态', en:'GROUP', url : '/newsCenterPage'},
						{cn:'业务动态', en:'BUSINESS', url :'/businessPage'},
						{cn:'行业动态', en:'INDUSTRY', url : '/industryPage'},
						{cn:'通知公告', en:'NOTICE', url : '/noticePage'}
					]
				};

				$scope.menuIndex = 0;

				$scope.pills = ['首页','新闻中心','集团动态'];

				// 获取新闻分类
				$scope.newsClassify = function(){
					newsService.newsClassify(1,$scope.pageSize,$scope.pageIndex+1)
					.success(function(data){
						$scope.newsData = data;
						//console.log("datacanter",data);
						$scope.$emit('afterSearch',data);
					});
				};

				//获取新闻详细信息
				$scope.linkToNewsDetail = function(newsId){
					var id = newsId-0;
					newsService.newsDetail(id)
					.success(function(data){
						console.log("detail",data);
					});
					//$location.path('/homepage');
				};

				$scope.$on('afterSearch',function(e,args){
					var totalCount = args.count;
					$scope.pageCount = Math.floor((totalCount + ($scope.pageSize - 1)) / $scope.pageSize);
				});
				
				$scope.$on('pageIndexChanged',function(e,args){
					$scope.newsClassify();
				});
				//点击左右箭头 上下翻页
				function setCurrPage(index){
					return Math.max(Math.min($scope.pageCount-1,index),0);
				};
				// 前后翻页
				$scope.pagePrev = function(){
					$scope.currPage = setCurrPage($scope.currPage-1);
					$scope.newsClassify();
				};
				$scope.pageNext = function(){
					$scope.currPage = setCurrPage($scope.currPage+1);
					$scope.newsClassify();
				};
			}
		};
	}]);
});
	