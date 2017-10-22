rootModule.service('Map', function($scope,$q) {

    $scope.init = function() {
        var options = {
            center: new google.maps.LatLng(40.7127837, -74.00594130000002),
            zoom: 13,
            disableDefaultUI: true
        }
        $scope.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        $scope.places = new google.maps.places.PlacesService(this.map);
    }

    $scope.search = function(str) {
        var d = $q.defer();
        $scope.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }

    $scope.addMarker = function(res) {
        if($scope.marker) $scope.marker.setMap(null);
        $scope.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        $scope.map.setCenter(res.geometry.location);
    }

});