
define(['app'],function(app){
	app.directive('talent',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/talent.html',
			link:function(scope,elements,attrs){
				scope.bigTitle = {
					cn :'立即加入绿浪',
					bigcn:'搭上未来发展的航班',
					en:'ON THE FUTURE DEVELOPMENT OF FLIGHT',
				};
				scope.menuList = {
					title:{cn:'人才发展',en:'TALENT DEVELOPMENT'}, 
					list:[
						{cn:'人才理念', en:'TALENT IDEA', url:'/talentPage'},
						{cn:'招聘岗位', en:'RECRUITMENT', url:'/joinUsPage'},
					]
				};

				scope.menuIndex = 0;

				scope.pills = ['首页','人才发展','人才理念'];
			}
		};
	}]);
});
	