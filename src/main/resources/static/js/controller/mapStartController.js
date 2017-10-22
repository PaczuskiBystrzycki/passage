rootModule.controller("mapStartController",function (NgMap,$scope) {

    $scope.types = "['establishment']";
    $scope.address = 'Ząbki';
    //$scope.mybounds = '{center: {lat: 45, lng: 9}, radius: 5000}';
    NgMap.getMap().then(function(map) {

    });


    $scope.placeChanged = function() {
         $scope.place = this.getPlace();
            console.log('location', $scope.place.geometry.location);
            // console.log('location', $scope.place.geometry);
            // console.log('location', $scope.place.geometry.d);
            // console.log('location', $scope.place.geometry.d.d);
            // console.log('location', $scope.place.geometry.f);
            // console.log('location', $scope.place.geometry.f.f);

        // $scope.map.setCenter(vm.place.geometry.location);
    }

});