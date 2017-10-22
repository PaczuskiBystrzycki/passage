rootModule.directive('mapDir',function(){
    return{
        restrict: 'E',
        templateUrl: 'views/fragments/map.htm',
        controller:'mapController',
    }
})