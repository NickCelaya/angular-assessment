angular.module("assessment").service("shopService", function($http){

  const baseUrl = "https://practiceapi.devmountain.com/products"


 this.getData = () => {
   console.log("data is flowing from the service"); //remove after
   return $http({
     method: "GET",
     url: baseUrl
   }).then( (response) => {
     return response.data
   })
 }


//end of service
});
