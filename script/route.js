'use strict';

define(["angularRoute",
	"app",
	'testCtrl',
	'companyListCtrl',
	'homepageCtrl',
	'growingCtrl',
	'honorCtrl'
	],
	function(__angularRoute,app){
		var initRoute = function(){		
			app.config(["$routeProvider",function($routeProvider){
				console.log("init route...");
				$routeProvider
					.when("/",{
						templateUrl:"view/test.html",
						controller:"testCtrl"
					})
					.when("/homepage",{
						templateUrl:"view/homepage.html",
						controller:"homepageCtrl"
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
					.otherwise('/'); 
				console.log("init route complete");
			}]);
		};
		return {init:initRoute};
	}
);
