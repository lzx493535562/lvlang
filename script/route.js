'use strict';

define(["angularRoute",
	"app",
	'testCtrl',
	'companyListCtrl',
	'homepageCtrl',
	'visualServicePageCtrl',
	'trainPageCtrl',
	'growingCtrl',
	'honorCtrl',
	'aboutusCtrl'
	],
	function(__angularRoute,app){
		var initRoute = function(){		
			app.config(["$routeProvider",function($routeProvider){
				console.log("init route...");
				$routeProvider
					.when("/",{
						templateUrl:"view/aboutus.html",
						controller:"testCtrl"
					})
					.when("/homepage",{
						templateUrl:"view/homepage.html",
						controller:"homepageCtrl"
					})
					.when("/visualServicePage",{
						templateUrl:"view/visualServicePage.html",
						controller:"visualServicePageCtrl"
					})
					.when('/trainPage',{
						templateUrl:"view/trainPage.html",
						controller:"trainPageCtrl"
					})
					.when('/companyList',{
						templateUrl:'view/companyList.html',
						controller:'companyListCtrl'
					})
					.when('/growing',{
						templateUrl:'view/growing.html',
						controller:'growingCtrl'
					})
					.when('/honor',{
						templateUrl:'view/honor.html',
						controller:'honorCtrl'
					})
					.when('/aboutus',{
						templateUrl:'view/aboutus.html',
						controller:'aboutusCtrl'
					})
					.otherwise('/'); 
				console.log("init route complete");
			}]);
		};
		return {init:initRoute};
	}
);
