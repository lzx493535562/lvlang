
define(['app'],function(app){
	app.directive('nav',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/nav.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});
	