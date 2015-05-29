"use strict";
MyApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;

    $urlRouterProvider.otherwise("/login");

    $stateProvider
	    .state("logout", {
		    url: "/logout",
		    controller: "LogoutController"
	    })
        .state("login", {
            url: "/login",
            templateUrl: "app/features/login/loginView.html",
            controller: "LoginController",
            resolve:{
                LoginMode:  function(){
                    return "client";
                }
            }
        })
	    .state("admin/login", {
		    url: "/admin/login",
		    templateUrl: "app/features/login/loginView.html",
		    controller: "LoginController",
		    resolve:{
			    LoginMode:  function(){
				    return "admin";
			    }
		    }
	    })
        .state("main", {
            url: "/main",
            templateUrl: "app/features/main/mainView.html",
            controller: "MainController"
        })
        .state("rating", {
            url: "/rating",
            templateUrl: "app/features/rating/ratingView.html",
            controller: "RatingController"
        })
        .state("stats", {
            url: "/stats",
            templateUrl: "app/features/stats/statsView.html",
            controller: "StatsController"
        });
});

