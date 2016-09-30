app.controller("currentController", function($scope, $http, $document, $window, $timeout) {

    $scope.openPhoneInput = false;
    
    $scope.$watch(function () {
        return $window.scrollY;
    }, function (scrollY) {
        //console.log(scrollY);
        if(scrollY >= 45){
            $scope.FixedRestMenu = true;

        }else{
            $scope.FixedRestMenu = false;
        }

    });

    $scope.currentRestaurant = {
        mobileNumber: '+(222) 1212145454',
        name: 'The best restaurant in the world',
        rating: '3',
        comment: '121',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Aliquid aperiam aspernatur debitis deserunt dicta earum error hic illum in ' +
        'labore nostrum officiis reprehenderit sed, similique tenetur totam unde veniam voluptate.' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam aspernatur debitis ' +
        'deserunt dicta earum error hic illum in labore nostrum officiis reprehenderit sed,',
        address: 'Lorem ipsum dolor sit amet, consectetur',
        site: 'http://www.Loremipsum.com',
        price: '100$-4000$',
        workingHours: '12:00- 24:00',
        
    };

    $scope.togglePhoneNumber = function(){
        $scope.openPhoneInput = $scope.openPhoneInput === false ? true: false;
    }


    //map section

    $scope.restaurants = [

        {
            id:6,
            image: 'images/restaurantImages/rest4.jpg',
            title : 'Title6',
            service : 'banket, restaurant',
            explane: 'in this bar  you can finde many testy foods and',
            rating: '2',
            lat : 37.1800,
            long : -115.6522
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
            icon: '../images/ball.png',
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
        });

        $scope.markers.push(marker);
    };
    for (i = 0; i < $scope.restaurants.length; i++){
        createMarker($scope.restaurants[i]);
    }
});

