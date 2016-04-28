
define(['app',
		'leftMenu',
		'path',
		'bigTitle'
	],function(app){
	app.directive('visualService',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/visualService.html',
			link:function(scope,elements,attrs){
				scope.bigTitle = {
					cn :'绿浪专注数字商品未来',
					bigcn:'开启数字商品新连接',
					en:'NEW CONNECTION OF DIGITAL GOODS',
				};
				scope.menuList = {
					title:{cn:'主营业务',en:'MAIN BUSINESS'}, 
					list:[
						{cn:'数据采集', en:'COLLECT'},
						{cn:'数据管理', en:'MANAGEMENT'},
						{cn:'体育制作', en:'EDU'},
						{cn:'视觉服务', en:'SERVICES'},
						{cn:'教育培训', en:'TRAIN'}
					]
				};

				scope.menuIndex = 3;

				scope.pills = ['首页','主营业务','电商视觉服务'];
			}
		};
	}]);
});
	