rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/nn", {
            templateUrl : "templates/offer.htm"
        })
        .when("/offer", {
            templateUrl : "/templates/offer.htm"
        });
});