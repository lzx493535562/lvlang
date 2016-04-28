
define(['app'],function(app){
	app.directive('home',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/home.html',
			link:function(scope,elements,attrs){

				scope.bigTitle ={
					cn:'数据即资产 不用即贬值',
					bigcn:'全渠道零售下的商品数据服务',
					en:'COMMODITY DATA SERVICES UNDER FULL CHANNEL RETAILING'
				};
			}
		};
	}]);
});
	