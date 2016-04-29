
define(['app',
	'leftMenu',
	'path',
	'bigTitle'
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
						{cn:'关于绿浪', en:'ABOUT US',url:'/aboutus'},
						{cn:'公司荣誉', en:'HONORS',url:'/honor'},
						{cn:'成员公司', en:'MEMBERS',url:'/companyList'},
						{cn:'成长之路', en:'GROWTH PATH',url:'/growing'}
					]
				};

				scope.menuIndex = 2;

				scope.pills = ['首页','公司简介','成员公司'];

				scope.bigTitle ={
					cn:'立即加入绿浪',
					bigcn:'与我们一起开启数字商品新连接',
					en:'IMMEDIATELY JOIN THE GREENSEA'
				};
			}
		};
	}]);
});
	