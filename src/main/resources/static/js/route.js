rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/passage", {
            templateUrl : " views/passage.htm",
            controller : 'passageController'
        })
        .when("/", {
            templateUrl : " views/main.htm",
            controller : 'mainController'
        })
});
