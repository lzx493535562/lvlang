
define(['app',
	'leftMenu',
	'path',
	'bigTitle',
	'pager',
	'conService',
	'newsService'
	],function(app){
	app.directive('notice',["newsService",'conService',function(newsService,conService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/notice.html',
			link:function($scope,$elements,$attrs){
				$scope.pageIndex = 0;
				$scope.pageCount = 0;
				$scope.pageSize = 6;


				var menu = conService.getMenu('news_center');
				$scope.menuList = {title: menu.title, list: menu.list };
				$scope.bigTitle = menu.bigTitle;


				$scope.menuIndex = 3;

				$scope.pills = ['首页','新闻中心','通知公告'];

				// 获取新闻分类
				$scope.newsClassify = function(){
					newsService.newsClassify(4,$scope.pageSize,$scope.pageIndex+1)
					.success(function(data){
						var formatData = format(data);
						$scope.newsData = formatData.list;
						//console.log("datacanter",data);
						$scope.$emit('afterSearch',formatData);
					});

					function format(data){
						var list =[];
						for(var key in data){
							if(/\d+/.test(key)){
								list.push(data[key]);
							}
						}
						var count = data.count;
						return {
							list:list,
							count:count
						};
					}
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
	