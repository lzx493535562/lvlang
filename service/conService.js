
define(['app'],function(app){
	app.service('conService',[function(){
		this.version = function(){
			return 'lingmall scaffolding version 0.1.0';
		};
	}]);
});
	