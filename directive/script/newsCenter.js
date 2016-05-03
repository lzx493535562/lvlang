
define(['app',
		'pager',
		'newsService'
	],function(app){
	app.directive('newsCenter',["newsService",function(newsService){
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
						{cn:'集团动态', en:'GROUP', newsIndex : '1'},
						{cn:'业务动态', en:'BUSINESS', newsIndex :'2'},
						{cn:'行业动态', en:'INDUSTRY', newsIndex : '3'},
						{cn:'通知公告', en:'NOTICE', nesIndex : '4'}
					]
				};

				$scope.menuIndex = 0;

				$scope.pills = ['首页','新闻中心','集团动态'];

				// 获取新闻分类
				$scope.newsClassify = function(){
					newsService.newsClassify(1,$scope.pageSize,$scope.pageIndex+1)
					.success(function(data){
						$scope.newsData = data;
						console.log("datacanter",data);
						$scope.$emit('afterSearch',data);
					});
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
	