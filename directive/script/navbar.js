
define(['app'],function(app){
	app.directive('navbar',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/navbar.html',
			link:function(scope,elements,attrs){
				scope.index = attrs.index;

				scope.data = [
					{value:'#/homepage',text:'网站首页'},
					{value:'#/aboutus',text:'关于绿浪'},
					{value:'#/newsCenterPage',text:'新闻中心'},
					{value:'#/edu',text:'主营业务'},
					{value:'#/talentPage',text:'人才发展'}
					// {value:'',text:'企业愿景'},
				];
			}
		};
	}]);
});
	