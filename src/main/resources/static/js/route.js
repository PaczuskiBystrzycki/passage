rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/transport", {
            templateUrl : " views/transport.htm",
            controller : 'transportController'
        })
        .when("/passage", {
            templateUrl : " views/passage.htm",
            controller : 'passageController'
        })
        .when("/", {
            templateUrl : " views/main.htm",
            controller : 'mainController'
        })
});
