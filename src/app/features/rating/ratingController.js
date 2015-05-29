MyApp
    .controller('RatingController', function($scope, $rootScope, Common, $timeout, TripService) {
		TripService.get().then(function(response){
			$scope.trips = response.data;
            $scope.rating = {
                action:function(trip){
                    console.log(trip);
                    var obj = {
                        _id:trip._id,
                        score:trip.score
                    };

                    TripService.update(obj).then(function(response){

                        if (!Common.isError(response)){

                        }else{

                        }

                    });

                }
            };
            Common.loading(false);

		});


    });
