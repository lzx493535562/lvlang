
define(['app',
	'leftMenu',
	'path',
	'bigTitle',
	'conService',
	],function(app){
	app.directive('talent',['conService',function(conService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/talent.html',
			link:function(scope,elements,attrs){
				var menu = conService.getMenu('talent_development');
				scope.menuList = {title: menu.title, list: menu.list };
				scope.bigTitle = menu.bigTitle;


				scope.menuIndex = 0;

				scope.pills = ['首页','人才发展','人才理念'];
			}
		};
	}]);
});
	