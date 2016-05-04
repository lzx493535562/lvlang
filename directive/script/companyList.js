
define(['app',
	'leftMenu',
	'path',
	'bigTitle',
	'conService'
	],function(app){
	app.directive('companyList',['conService',function(conService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/companyList.html',
			link:function(scope,elements,attrs){
				var menu = conService.getMenu('company_profile');
				scope.menuList = {title: menu.title, list: menu.list };
				scope.bigTitle = menu.bigTitle;

				scope.menuIndex = 2;

				scope.pills = ['首页','公司简介','成员公司'];

				
			}
		};
	}]);
});
	