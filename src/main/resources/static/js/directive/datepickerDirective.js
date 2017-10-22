rootModule.directive('datepickerDir',function(){
    return{
        restrict: 'E',
        templateUrl: 'views/fragments/datepicker.htm',
        controller:'datepickerController',
    }
})