
define(['app',
	'leftMenu',
	'path',
	'bigTitle',
	'path',
	'conService'
	],function(app){
	app.directive('visualService',['conService',function(conService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/visualService.html',
			link:function(scope,elements,attrs){
				var menu = conService.getMenu('main_business');
				scope.menuList = {title: menu.title, list: menu.list };
				scope.bigTitle = menu.bigTitle;
				

				scope.menuIndex = 2;

				scope.pills = ['首页','主营业务','电商视觉服务'];
			}
		};
	}]);
});
	