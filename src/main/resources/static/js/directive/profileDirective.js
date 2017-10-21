rootModule.directive('profileDir',function(){
    return{
        restrict: 'E',
        templateUrl: 'views/fragments/profile.htm',
        controller:'transportController',
    }
})
