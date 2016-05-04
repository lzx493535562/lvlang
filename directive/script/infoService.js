
define(['app',
	'leftMenu',
	'path',
	'bigTitle',
	'conService'
	],function(app){
	app.directive('infoService',['conService',function(conService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/infoService.html',
			link:function(scope,elements,attrs){
				var menu = conService.getMenu('main_business');
				scope.menuList = {title: menu.title, list: menu.list };
				scope.bigTitle = menu.bigTitle;

				scope.menuIndex = 0;

				scope.pills = ['首页','主营业务','商品数据采集'];

				
			}
		};
	}]);
});
	