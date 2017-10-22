rootModule.controller("mapController",function (NgMap,$scope) {

    $scope.address = 'Ząbki';
    var d= NgMap.getMap().then(function(map) {
        gD= map.getCenter();

        console.log('center f',map.getCenter());
        // //console.log(map.getGeoLocation())
        // console.log('map geolocataion',map.getGeoLocation)
        // console.log('markers', map.markers);
        // console.log('shapes', map.shapes);
    });


    $scope.placeChanged = function(dana) {
        // $scope.place = d.getPlace();
        // console.log('location', $scope.place.geometry.location);
        // $scope.map.setCenter(vm.place.geometry.location);
    }

});