(function outerMain() {
	"use strict";

	function TestCtrl($templateCache) {
		this.user = {name : "Kale"};

		console.log($templateCache.get("test.html"));
	};

	var app = angular.module("myApp", ['ngRoute']);

	app.config(function($routeProvider){		// NOTE: We aren't using ui-router, which uses $stateParams and $urlRouterProvider
		$routeProvider.when("/", {
			controller: "TestCtrl as test",
			templateUrl: "test.html"
		})
		.otherwise("/");	// Defining a home/fallback state if the endpoint is unavailabe.
	});
	
	app.controller("TestCtrl", TestCtrl);

	angular.module("myApp").run(function ($templateCache){
		$templateCache.put("test.html", "Hello {{test.user.name}}");
	});

}());