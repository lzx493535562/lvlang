
define(['app'],function(app){
	app.directive('leftMenu',[function(){
		return {
			restrict:'E',
			scope:{
				data:'=',
				index:'='
			},
			replace:false,
			templateUrl:'../directive/html/leftMenu.html',
			link:function(scope,elements,attrs){
				console.log(scope.data);
				console.log(scope.index);
			}
		};
	}]);
});
	