rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/qw3re", {
            templateUrl : " views/dashboard.htm"
        })
        .when("/login", {
            templateUrl : " views/login.htm"
        })
        .when("/offer", {
            templateUrl : " views/offers.htm"
        }).otherwise("/",{
            templateUrl : "views/dashboard.htm"
    });
});
