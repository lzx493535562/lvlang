
define(['app','leftMenu'],function(app){
	app.controller('companyListCtrl',['$scope',function(scope){
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
	}]);
});
	