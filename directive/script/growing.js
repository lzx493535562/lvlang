
define(['app'],function(app){
	app.directive('growing',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/growing.html',
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

				scope.menuIndex = 3;

				scope.pills = ['首页','公司简介','成长之路'];

				scope.bigTitle ={
					cn:'立即加入绿浪',
					bigcn:'与我们一起开启数字商品新连接',
					en:'IMMEDIATELY JOIN THE GREENSEA'
				};
			}
		};
	}]);
});
	