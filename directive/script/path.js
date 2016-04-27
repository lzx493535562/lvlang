
define(['app'],function(app){
	app.directive('path',[function(){
		return {
			restrict:'E',
			scope:{
				data:'='
			},
			replace:false,
			templateUrl:'../directive/html/path.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});
	