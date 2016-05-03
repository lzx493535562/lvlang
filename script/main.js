requirejs.config({
	//默认情况下模块所在目录为js/lib
	baseUrl: '/',
	//当模块id前缀为app时，他便由js/app加载模块文件
	//这里设置的路径是相对与baseUrl的，不要包含.js
	paths: {
		angular:'bower_components/angular/angular',
		angularRoute:"bower_components/angular-route/angular-route.min",

		// base
		app:'./script/app',
		route:'./script/route',

		// controller
		infoServiceCtrl:'./controller/infoServiceCtrl',
		newsCenterPageCtrl:'./controller/newsCenterPageCtrl',
		talentPageCtrl:'./controller/talentPageCtrl',
		joinUsPageCtrl:'./controller/joinUsPageCtrl',
		eduCtrl:'./controller/eduCtrl',
		trainPageCtrl:'./controller/trainPageCtrl',
		visualServicePageCtrl:'./controller/visualServicePageCtrl',
		aboutusCtrl:'./controller/aboutusCtrl',
		honorCtrl:'./controller/honorCtrl',
		growingCtrl:'./controller/growingCtrl',
		companyListCtrl:'./controller/companyListCtrl',
		homepageCtrl:'./controller/homepageCtrl',
		testCtrl:'./controller/testCtrl',

		// directive
		infoService:'./directive/script/infoService',
		newsCenter:'./directive/script/newsCenter',
		talent:'./directive/script/talent',
		joinUs:'./directive/script/joinUs',
		edu:'./directive/script/edu',
		train:'./directive/script/train',
		visualService:'./directive/script/visualService',
		aboutus:'./directive/script/aboutus',
		honor:'./directive/script/honor',
		growing:'./directive/script/growing',
		bigTitle:'./directive/script/bigTitle',
		footer:'./directive/script/footer',
		footer:'./directive/script/footer',
		companyList:'./directive/script/companyList',
		path:'./directive/script/path',
		leftMenu:'./directive/script/leftMenu',
		home:'./directive/script/home',
		pager:'./directive/script/pager',
		navbar:'./directive/script/navbar',
		guide:'./directive/script/guide',
		test:'./directive/script/test',

		// service
		newsService:'./service/newsService',
		testService:'./service/testService',

		// end tail
		"jquery":"bower_components/jquery/dist/jquery.min"
	},
  　　	//加载顺序规则
	shim:{
		angularRoute:["angular"]
	}
});
// 开始逻辑. 加载依赖模块
requirejs(['app','route','jquery'],function(app,route,$){
	route.init();
	window.onload = function(){
	};
	$(function(){
		angular.bootstrap(document.body,[app.name]);
		console.log(123);
	})
});
