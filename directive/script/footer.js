
define(['app'],function(app){
	app.directive('footer',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/footer.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});
	