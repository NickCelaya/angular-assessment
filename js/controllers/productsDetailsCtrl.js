angular.module("assessment").controller("productsCtrl", function($scope, $stateParams, shopService){

$scope.product;

$scope.getProducts = () => {
  shopService.getData().then( (response) =>{
    for(let i = 0; i < response.length; i++){
      if(response[i].id === $stateParams.id){
        $scope.product = response[i];
      }
    }
  })
}

$scope.getProducts();

//end of controller
});
