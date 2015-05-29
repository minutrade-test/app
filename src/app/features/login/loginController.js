MyApp
    .controller('LoginController', function($scope, $rootScope,$sce, $http, $location, Common, UserService, $timeout, $state, LoginMode, Config) {
		$scope.formData = {};
        if (Common.isEmpty(LoginMode)){
            LoginMode = "login";
        }

        $scope.mode = LoginMode;

        Common.loading(false);

        $scope.checkLogin = function(){
	        if (Common.isEmpty($scope.formData.email)){
		        Common.showMessage("Digite seu email!", "warning");
		        return;
	        }
	        if (LoginMode=="admin" && Common.isEmpty($scope.formData.password)){
		        Common.showMessage("Digite sua senha !", "warning");
		        return;
	        }
            if (LoginMode=="client" && Common.isEmpty($scope.formData.cpf)){
                Common.showMessage("Digite seu CPF !", "warning");
                return;
            }
            $scope.checkingLogin = true;

            UserService.checkLogin($scope.formData, LoginMode).then(function(response){

                if (!Common.isError(response)){
                    $rootScope.session = {user:response.data};

                    Common.loading(true);

                    $timeout(function(){
                        if (LoginMode=="client"){
                            Common.goTo("rating");
                        }else if (LoginMode=="admin"){
                            Common.goTo("stats");
                        }else{
                            Common.goTo("login");
                        }

                    },2000);

                }else{
                    Common.showMessage("Dados não encontrados", "error");
	                $scope.formData.password = "";
	                $scope.checkingLogin = false;
                }



            });
        };

    });
