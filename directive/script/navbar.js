
define(['app'],function(app){
	app.directive('navbar',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/navbar.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});
	