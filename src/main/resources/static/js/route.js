rootModule.config(function($routeProvider) {
    $routeProvider
        .when("/transport-add", {
            templateUrl : " views/transportAdd.htm",
            controller : 'transportAddController'
        })
        when("/transport-search", {
            templateUrl : " views/transportSearch.htm",
            controller : 'transportSearchController'
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
