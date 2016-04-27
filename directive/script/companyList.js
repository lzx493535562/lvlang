
define(['app',
	'leftMenu',
	'path'
	],function(app){
	app.directive('companyList',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/companyList.html',
			link:function(scope,elements,attrs){
				scope.menuList = {
					title:{cn:'公司简介',en:'COMPANY PROFILE'}, 
					list:[
						{cn:'关于绿浪', en:'ABOUT US'},
						{cn:'公司荣誉', en:'HONORS'},
						{cn:'成员公司', en:'MEMBERS'},
						{cn:'成长之路', en:'GROWTH PATH'}
					]
				};

				scope.menuIndex = 2;

				scope.pills = ['首页','公司简介','成员公司'];
			}
		};
	}]);
});
	