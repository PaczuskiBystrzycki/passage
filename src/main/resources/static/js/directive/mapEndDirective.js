rootModule.directive('mapEndDir',function(){
    return{
        restrict: 'E',
        scope: {},
        templateUrl: 'views/fragments/map.htm',
        controller:'mapEndController',
    }
})