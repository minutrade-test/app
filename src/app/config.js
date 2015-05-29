"use strict";
MyApp
	.factory("Config", ["$rootScope",function () {
		var factory = {
			getDomainUrl : function () {
				return "http://minutrade-test.herokuapp.com";
			},
			getApiUrl : function () {
				return this.getDomainUrl() + "/api";
			}
		};
		return factory;
	}]);



