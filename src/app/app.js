"use strict";
var MyApp = angular.module("MyApp", ["ngCookies","ngSanitize","ui.router","ngAnimate", "ngMaterial", "ngAnimate"]);

MyApp
    .controller("AppController", function($scope, $rootScope, Common, UserService, $mdMedia, $state) {
        $rootScope.padding = "16";
        if ($mdMedia("gt-md")){
            $rootScope.padding = "32";
        }

        $rootScope.logout = function(){
            UserService.logout().then(function(){
                Common.goTo("login");
            });
        }
        UserService.getActiveUser().then(function(response){
            if (!Common.isError(response)){

                $rootScope.session = {user:response.data};

            }else{
                Common.goTo("login");
            }

        });

    });