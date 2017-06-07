angular.module("assessment", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){




$stateProvider

.state("home",{
  url: "/",
  templateUrl: "views/home.html",
})

.state("about",{
  url: "/about",
  templateUrl:"views/about.html",
})

.state("shop", {
  url: "/shop",
  templateUrl: "views/shop.html",
  controller: "shopCtrl"
})

.state("blog",{
  url: "/blog",
  templateUrl: "views/blog.html"
})

.state("details",{
  url: "/details/:id",
  templateUrl: "views/product-details.html",
  controller: "productsCtrl"
})


live

$urlRouterProvider
.otherwise("/")


//end of app
});
