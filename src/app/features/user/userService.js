MyApp
    .factory('UserService', function($http, Config, Gateway) {
        var service = {
            checkLogin : function(obj, mode){
                return Gateway.post("/login/"+mode, obj);
            },
            logout : function(){
                return Gateway.post("/logout");
            },
            getActiveUser : function(){
                return Gateway.get("/login");
            }
        };
        return service;
    });
