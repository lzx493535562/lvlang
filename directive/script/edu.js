
define(['app',
	'leftMenu',
	'path',
	'bigTitle'
	],function(app){
	app.directive('edu',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/edu.html',
			link:function(scope,elements,attrs){
				scope.menuList = {
					title:{cn:'主营业务',en:'MAIN BUSINESS'}, 
					list:[
						{cn:'商品数据采集', en:'COLLECT', url:'/'},
						{cn:'商品数据管理', en:'MANA', url:'/'},
						{cn:'在线教育制作', en:'EDU', url:'/'},
						{cn:'电商视觉服务', en:'SERVICES', url:'/'},
						{cn:'电商教育培训', en:'TRAIN', url:'/'}
					]
				};

				scope.menuIndex = 2;

				scope.pills = ['首页','主营业务','在线教育内容操作'];

				scope.bigTitle ={
					cn:'绿浪专注数字商品未来',
					bigcn:'开启数字商品新连接',
					en:'NEW CONNECTION OF DIGITAL GOODS'
				};
				
			}
		};
	}]);
});
	