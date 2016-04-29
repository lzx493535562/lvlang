
define(['app'],function(app){
	app.directive('joinUs',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/joinUs.html',
			link:function(scope,elements,attrs){
				scope.bigTitle = {
					cn :'立即加入绿浪',
					bigcn:'搭上未来发展的航班',
					en:'ON THE FUTURE DEVELOPMENT OF FLIGHT',
				};
				scope.menuList = {
					title:{cn:'人才发展',en:'TALENT DEVELOPMENT'}, 
					list:[
						{cn:'人才理念', en:'TALENT IDEA'},
						{cn:'招聘岗位', en:'RECRUITMENT'},
					]
				};

				scope.menuIndex = 1;

				scope.pills = ['首页','人才发展','招聘岗位'];

			}
		};
	}]);
});
	