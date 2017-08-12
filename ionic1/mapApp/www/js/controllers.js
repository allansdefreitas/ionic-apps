angular.module('starter.controllers', [])

  .controller('MapCtrl', function ($scope, $ionicLoading, $cordovaGeolocation) {
    $scope.mapCreated = function (map) {
      $scope.map = map;
    };

    $scope.centerOnMe = function () {
      console.log("Centering");
      if (!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function (pos) {
        console.log('Got pos', pos);
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $scope.loading.hide();
      }, function (error) {
        alert('Unable to get location: ' + error.message);
      });
    };

    var marker;

    var watchOptions = {
      timeout: 3000,
      enableHighAccuracy: false
    }

    var watch = $cordovaGeolocation.watchPosition(watchOptions);

    watch.then(null,
      function (err) { },
      function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        $scope.map.setCenter(new google.maps.LatLng(lat, lng));

        google.maps.event.addListenerOnce($scope.map, 'idle', function () {

          /* if there is a marker on map, this is droped 
          from map (no João e Maria)*/
          /*if(marker){ 
            marker.setMap(null);
          }*/
          marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(lat, lng)
          });

        });


      }


    )
  });
