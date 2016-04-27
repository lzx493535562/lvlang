
define(['app'],function(app){
	app.directive('home',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/home.html',
			link:function($scope,$elements,$attrs){

			}
		};
	}]);
});
	