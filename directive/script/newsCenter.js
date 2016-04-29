
define(['app'],function(app){
	app.directive('newsCenter',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/newsCenter.html',
			link:function(scope,elements,attrs){
				scope.bigTitle = {
					cn :'绿浪深耕电商领域',
					bigcn:'发现数字商品未来与机遇',
					en:'DIGITAL COMMODITIES IN THE FUTURE AND OPPORTUNITIES',
				};
				scope.menuList = {
					title:{cn:'新闻中心',en:'NEWS CENTER'}, 
					list:[
						{cn:'集团动态', en:'GROUP'},
						{cn:'业务动态', en:'BUSINESS'},
						{cn:'行业动态', en:'INDUSTRY'},
						{cn:'通知公告', en:'NOTICE'}
					]
				};

				scope.menuIndex = 0;

				scope.pills = ['首页','新闻中心','集团动态'];
				
			}
		};
	}]);
});
	