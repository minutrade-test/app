MyApp
    .controller('StatsController', function($scope, $rootScope, Common, $timeout, TripService) {
		TripService.getTopRated().then(function(responseTop){
            $scope.topRated = responseTop.data;
            TripService.getUnderRated().then(function(responseUnder){
                $scope.underRated = responseUnder.data;
                Common.loading(false);
            });
		});
    });
