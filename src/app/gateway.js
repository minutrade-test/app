"use strict";
MyApp
    .factory("Gateway", function($http, Config, $q, Common) {
        var service = {
            post : function(path, obj){
                var d = $q.defer();
                $http.post(Config.getApiUrl() + path, obj)
                    .success(function(data) {
		                d.resolve(data);
                    })
                    .error(function(data) {
                        d.resolve({error:"server_error"});
                    });
                return d.promise;
            },
            put : function(path, obj){
                var d = $q.defer();
                $http.put(Config.getApiUrl() + path, obj)
                    .success(function(data) {
                        d.resolve(data);
                    })
                    .error(function(data) {
                        d.resolve({error:"server_error"});
                    });
                return d.promise;
            },
            get : function(path){
                var d = $q.defer();

                $http.get(Config.getApiUrl() + path)
                    .success(function(data) {
                        d.resolve(data);
                    })
                    .error(function(data) {
                        d.resolve({error:"server_error"});
                    });
                return d.promise;
            }
        };
        return service;
    });
