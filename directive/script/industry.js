
define(['app',
		'pager',
		'newsService',
		'conService'
	],function(app){
	app.directive('industry',["newsService",'conService','$routeParams',function(newsService,conService,$routeParams){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/industry.html',
			link:function($scope,$elements,$attrs){
				$scope.pageIndex = 0;
				$scope.pageCount = 0;
				$scope.pageSize = 6;

				var menu = conService.getMenu('news_center');
				$scope.menuList = {title: menu.title, list: menu.list };
				$scope.bigTitle = menu.bigTitle;


				$scope.menuIndex = 1;

				$scope.pills = ['首页','新闻中心','行业动态'];

				// 获取新闻分类
				$scope.newsClassify = function(){
					newsService.newsClassify(2,$scope.pageSize,$scope.pageIndex+1)
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

				//获取新闻详细信息
				$scope.linkToNewsDetail = function(newsId){
					var id = newsId-0;
					newsService.newsDetail(id)
					.success(function(data){
						console.log("detail",data);
						$scope.newsCenterDetailInfo = data.content;
						$(".main").html($scope.newsCenterDetailInfo);
					});
				};

				//从首页跳转新闻中心
				$scope.newsId = $routeParams.newsId;

				$scope.newsDetail = function(){
					if($scope.newsId===undefined){return;};
					newsService.newsDetail($scope.newsId)
					.success(function(data){
						console.log("detail",data);
						$scope.detailData = data;
						$scope.newsDetailInfo = data.content;
						$scope.classifyId = data.classifyId-0;
						$scope.menuIndex = $scope.classifyId-1;

						$(".main").html($scope.newsDetailInfo);
					});
				};

				$scope.newsDetail();

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
	