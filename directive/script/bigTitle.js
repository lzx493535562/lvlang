
define(['app'],function(app){
	app.directive('bigTitle',[function(){
		return {
			restrict:'E',
			scope:{
				data:'='
			},
			replace:false,
			templateUrl:'../directive/html/bigTitle.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});
	