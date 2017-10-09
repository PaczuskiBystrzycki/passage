rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : " views/dashboard.htm"
        })
        .when("/login", {
            templateUrl : " views/login.htm"
        })
        .when("/offer", {
            templateUrl : " views/offers.htm"
        });
});