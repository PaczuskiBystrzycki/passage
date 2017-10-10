rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/passage", {
            templateUrl : " views/passage.htm",
            controller : 'passageController'
        })
});
