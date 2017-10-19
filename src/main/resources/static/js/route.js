rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/transport-add", {
            templateUrl : " views/transportAdd.htm",
            controller : 'transportController'
        })
        when("/transport-search", {
            templateUrl : " views/transportSearch.htm",
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
