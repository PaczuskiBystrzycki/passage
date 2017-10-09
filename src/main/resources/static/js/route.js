rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/offer.htm"
        })
        .when("/offer", {
            templateUrl : "/views/offer.htm"
        });
});