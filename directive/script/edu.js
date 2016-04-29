
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
						{cn:'商品数据服务', en:'SERVICE'},
						{cn:'在线教育内容制作', en:'EDU'},
						{cn:'视觉服务', en:'VISUAL SERVICE'},
						{cn:'成长之路', en:'GROWTH PATH'}
					]
				};

				scope.menuIndex = 0;

				scope.pills = ['首页','主营业务','商品数据采集'];

				scope.bigTitle ={
					cn:'立即加入绿浪',
					bigcn:'与我们一起开启数字商品新连接',
					en:'IMMEDIATELY JOIN THE GREENSEA'
				};
				
			}
		};
	}]);
});
	