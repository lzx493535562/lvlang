'use strict';

define(["angularRoute",
	"app",
	'testCtrl',
	'homepageCtrl'
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
					.otherwise('/'); 
				console.log("init route complete");
			}]);
		};
		return {init:initRoute};
	}
);
