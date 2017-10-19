rootModule.directive('footerDir',function(){
    return{
        restrict: 'E',
        templateUrl: 'views/fragments/footer.htm',
        controller:'passageController',
    }
})