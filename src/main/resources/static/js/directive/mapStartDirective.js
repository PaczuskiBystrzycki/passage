rootModule.directive('mapStartDir',function(){
    return{
        restrict: 'E',
        // scope: {
        //     address: "Węgrów"
        // },
        scope: {},
        templateUrl: 'views/fragments/map.htm',
        controller:'mapStartController',
    }
})