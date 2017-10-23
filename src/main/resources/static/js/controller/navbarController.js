rootModule.controller("navbarController",function ($scope) {

$scope.setActive =function(data1,data2) {
    console.log("dziala  "+data2);
    console.log("data1=  "+data1);
    //jak to ustawic
    data1.addClass('active');

}

})