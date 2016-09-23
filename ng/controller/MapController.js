
//Data


app.controller('MapCtrl', function ($scope, $rootScope) {

    $scope.restaurants = [
        {
            id:1,
            image: 'images/restaurantImages/rest1.jpg',
            title : 'Title1',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '5',
            lat : 43.7000,
            long : -79.4000
        },
        {
            id:2,
            image: 'images/restaurantImages/rest2.jpg',
            title : 'Title2',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '3',
            lat : 40.6700,
            long : -73.9400
        },
        {
            id:3,
            image: 'images/restaurantImages/rest3.jpg',
            title : 'Title3',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '4',
            lat : 41.8819,
            long : -87.6278
        },
        {
            id:4,
            image: 'images/restaurantImages/rest3.jpg',
            title : 'Title4',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '5',
            lat : 34.0500,
            long : -118.2500
        },
        {
            id:5,
            image: 'images/restaurantImages/rest4.jpg',
            title : 'Title5',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '1',
            lat : 36.0800,
            long : -115.1522
        },
        {
            id:6,
            image: 'images/restaurantImages/rest4.jpg',
            title : 'Title6',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '2',
            lat : 37.1800,
            long : -115.6522
        },
        {
            id:7,
            image: 'images/restaurantImages/rest1.jpg',
            title : 'Title7',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '3',
            lat : 38.2800,
            long : -115.5522
        },
        {
            id:8,
            image: 'images/restaurantImages/rest2.jpg',
            title : 'Title8',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '5',
            lat : 39.3800,
            long : -115.4522
        },
        {
            id:9,
            image: 'images/restaurantImages/rest3.jpg',
            title : 'Title9',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '5',
            lat : 39.4800,
            long : -115.3522
        },
        {
            id:10,
            image: 'images/restaurantImages/rest4.jpg',
            title : 'Title10',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '3',
            lat : 36.9800,
            long : -115.2522
        }
    ];
    var mapOptions = {
            zoom: 5,
            center: new google.maps.LatLng(40.0000, -98.0000),
            mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info){

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.title,
            id: info.id,
            image: info.image,
            service: info.service,
            explane: info.explane,
            rating: info.rating
        });
        marker.content = '<div class="infoWindowContent">' + info.explane + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
            $scope.clichedElementId = marker.id;


            $scope.safeApply = function(fn) {
                var phase = this.$root.$$phase;
                if(phase == '$apply' || phase == '$digest') {
                    if(fn && (typeof(fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

            $scope.safeApply(
                $scope.clichedElementId
            );



            /*$scope.$apply();*/
        });

        $scope.markers.push(marker);
    };

    for (i = 0; i < $scope.restaurants.length; i++){
        createMarker($scope.restaurants[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };


});