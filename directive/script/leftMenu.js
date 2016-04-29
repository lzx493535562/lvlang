
define(['app'],function(app){
	app.directive('leftMenu',['$location',function($location){
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


				scope.linkTo = function(index){
					$location.path(scope.data.list[index].url);
				};
			}
		};
	}]);
});
	