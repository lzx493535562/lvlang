
define(['app'],function(app){
	app.directive('pager',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/pager.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});
	