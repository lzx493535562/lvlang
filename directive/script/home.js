
define(['app',
		'newsService'
	],function(app){
	app.directive('home',['newsService',"$location","$filter",function(newsService,$location,$filter){
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
						console.log("newsmonth",data);
						scope.newsMonthsData = data;
					})
				};

				//获取6条新闻
				scope.newsList = function(){
					newsService.newsList()
					.success(function(data){
						console.log("newsList",data);
						scope.newsListData = data;
					})
				};

				//新闻详细信息
				scope.linkToNewsDetail = function(id){
					var newsId = id-0;
					$location.path("/newsCenterPage/"+newsId);
				};

				scope.newsMoths();
				scope.newsList();

				//轮播图
				scope.lunboIndex = 0;
				scope.imageList = ['banner_01.png','banner_02.png','banner_03.png','banner_04.png'];
				scope.bigTitleList = [{
					cn:'数据即资产 不用即贬值',
					bigcn:'全渠道零售下的商品数据服务',
					en:'COMMODITY DATA SERVICES UNDER FULL CHANNEL RETAILING'
				},{
					cn:'权限管理 ▪ 多格式管理 ▪ 参数更新 ▪ 包装更新',
					bigcn:'商品数据管理----建立你的云商品库',
					en:'COMMODITY DATA MANAGEMENT - BUILD YOUR CLOUD PRODUCT LIBRARY'
				},{
					cn:'类目 ▪ 名称 ▪ 图片 ▪ 属性 ▪ 详情页',
					bigcn:'商品数据一键全网同步',
					en:'COMMODITY DATA A KEY TO THE WHOLE NETWORK SYNCHRONIZATION'
				},{
					cn:'商品采集流程化 ▪ 商品信息有序化 ▪ 项目实施专业化',
					bigcn:'商品数据制作----成本效率最优化',
					en:'COMMODITY DATA MAKING - COST EFFICIENCY OPTIMIZATION'
				}];
				var lunboInterval = 3000;
				var t;
				scope.lunbo = function(index){
					clearTimeout(t);
					scope.lunboIndex = index;
					scope.bigTitle = scope.bigTitleList[scope.lunboIndex];
					t = setInterval(function(){
						scope.lunboIndex  = (scope.lunboIndex+1)%scope.imageList.length;
						scope.bigTitle = scope.bigTitleList[scope.lunboIndex];
						scope.$apply();
					},lunboInterval);
				};

				scope.lunbo(0);

				//进入对应新闻页面
				scope.linkToNewsPage = function(path){
					$location.path(path);
				};

				//更换视频
				scope.showVideoIndex = function(index){
					scope.showImgIndex = index;


					var videoList = $('.video-list video');
					videoList.each(function(i,n){
						n.pause();
					});
					videoList.eq(index)[0].play();

				}

			}
		};
	}]);
});
	