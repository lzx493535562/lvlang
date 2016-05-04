
define(['app',
	'leftMenu',
	'path',
	'bigTitle',
	'conService'
	],function(app){
	app.directive('train',['conService',function(conService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/train.html',
			link:function(scope,elements,attrs){
				var menu = conService.getMenu('main_business');
				scope.menuList = {title: menu.title, list: menu.list };
				scope.bigTitle = menu.bigTitle;
				

				scope.menuIndex = 3;

				scope.pills = ['首页','主营业务','电商教育培训'];
			}
		};
	}]);
});
	