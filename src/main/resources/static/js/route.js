rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "login.htm"
        })
        .when("/offer", {
            templateUrl : "offer.htm"
        });
});