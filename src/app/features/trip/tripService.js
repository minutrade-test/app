MyApp
    .factory('TripService', function(Gateway, Common) {
        var service = {
            update : function(obj){
	            return Gateway.put("/trip", obj);
            },
            get : function(){
                return Gateway.get("/trip");
            },
            getTopRated : function(){
                return Gateway.get("/trip/rating/asc");
            },
            getUnderRated : function(){
                return Gateway.get("/trip/rating/desc");
            }
        };
        return service;
    });
