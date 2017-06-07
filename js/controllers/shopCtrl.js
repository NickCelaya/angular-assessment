angular.module("assessment").controller("shopCtrl", function($scope, shopService){

$scope.data;

$scope.getInfo = () => {
  shopService.getData().then( (response) => {
    console.log("hi nick", response);
    $scope.data = response;
  })
}

$scope.getInfo();


//end of controller
});
