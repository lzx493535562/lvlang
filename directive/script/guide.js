
define(['app'],function(app){
	app.directive('guide',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/guide.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});
	