rootModule.directive('navbarDir',function(){
    return{
        restrict: 'E',
        templateUrl: 'views/fragments/navbar.htm',
        controller:'passageController',
    }
})
