app.controller("myCtrl", function($scope, $http, $document, $window, $timeout) {

    $scope.search = true;
    $scope.custom = false;
    $scope.openDropMenu = false;

    $scope.displayElement = function (id) {
        var element1 = document.getElementById('f1');
        var element2 = document.getElementById('f2');
        var element3 = document.getElementById('f3');
        var element4 = document.getElementById('f4');
        var element5 = document.getElementById('f5');
        var element6 = document.getElementById('f6');
        var element = document.getElementById(id);
        if(element1!=element){
            element1.classList.remove('displayBlock');
            element1.classList.add('displayNone');
        }
        if(element2!=element){
            element2.classList.remove('displayBlock');
            element2.classList.add('displayNone');
        }
        if(element3!=element){
            element3.classList.remove('displayBlock');
            element3.classList.add('displayNone');
        }
        if(element4!=element){
            element4.classList.remove('displayBlock');
            element4.classList.add('displayNone');
        }
        if(element5!=element){
            element5.classList.remove('displayBlock');
            element5.classList.add('displayNone');
        }
        if(element6!=element){
            element6.classList.remove('displayBlock');
            element6.classList.add('displayNone');
        }
        if(element.classList.contains('displayBlock')){
            element.classList.remove('displayBlock');
            element.classList.add('displayNone');
        }else if(element.classList.contains('displayNone')){
            element.classList.remove('displayNone');
            element.classList.add('displayBlock');
        }
    };
    $scope.toggleMenu = function(menu) {
        if(menu == 'home'){
            //$scope.first = true;
            if($scope.custom && $scope.first){
                $scope.first = true;
                $scope.custom = false;
            }else if($scope.custom && $scope.first == false){
                $scope.custom = true;
                $scope.first = true;
            }else if($scope.custom == false){
                $scope.custom = true;
                $scope.first = true;
            }
            //$scope.custom = $scope.custom === false ? true: false;
        }else if(menu == 'place'){
            //$scope.first = false;
            if($scope.custom && $scope.first){
                $scope.first = false;
                $scope.custom = true;
            }else if($scope.custom && $scope.first == false){
                $scope.custom = false;
                $scope.first = false;
            }else if($scope.custom == false){
                $scope.custom = true;
                $scope.first = false;
            }
            //$scope.custom = $scope.custom === false ? true: false;
        }

        console.log($scope.first)
    };

    $scope.showSearch = function(){
        $scope.search = false
    };

    $scope.openDrop = function(){
        $scope.openDropMenu = $scope.openDropMenu === false ? true: false;
    };


    $scope.$watch(function () {
        return $window.scrollY;
    }, function (scrollY) {
        var elem = document.getElementById('secondNav');
        //console.log(scrollY);
        if(scrollY >= 460){
            if(!$( "#secondNav" ).hasClass( "fixedNavigation" )){
                $( "#secondNav" ).addClass( "fixedNavigation" );
            }
            $scope.visibleLittleMenu = true;
        }else{
            $( "#secondNav" ).removeClass( "fixedNavigation" );
            $scope.visibleLittleMenu = false;
        }
    });

    $scope.restaurants = {
        restaurant1:{
            image: 'images/restaurantImages/rest1.jpg',
            title: 'Title1',
            service: 'banket, restaurant',
            rating: '3',
            explane: 'in this bar  you can finde many testy foods and'
        },
        restaurant2:{
            image: 'images/restaurantImages/rest2.jpg',
            title: 'Title2',
            service: 'banket, restaurant',
            rating: '5',
            explane: 'in this bar  you can finde many testy foods and'
        },
        restaurant3:{
            image: 'images/restaurantImages/rest3.jpg',
            title: 'Title3',
            service: 'banket, restaurant',
            rating: '1',
            explane: 'in this bar  you can finde many testy foods and'
        },
        restaurant4:{
            image: 'images/restaurantImages/rest4.jpg',
            title: 'Title4',
            service: 'banket, restaurant',
            rating: '4',
            explane: 'in this bar  you can finde many testy foods and'
        },
        restaurant5:{
            image: 'images/restaurantImages/rest5.jpg',
            title: 'Title5',
            service: 'banket, restaurant',
            rating: '5',
            explane: 'in this bar  you can finde many testy foods and'
        },
        restaurant6:{
            image: 'images/restaurantImages/rest2.jpg',
            title: 'Title6',
            service: 'banket, restaurant',
            rating: '3',
            explane: 'in this bar  you can finde many testy foods and'
        },
        restaurant7:{
            image: 'images/restaurantImages/rest3.jpg',
            title: 'Title7',
            service: 'banket, restaurant',
            rating: '2',
            explane: 'in this bar  you can finde many testy foods and'
        },
        restaurant8:{
            image: 'images/restaurantImages/rest1.jpg',
            title: 'Title8',
            service: 'banket, restaurant',
            rating: '5',
            explane: 'in this bar  you can finde many testy foods and'
        }

    };

    $scope.additionalInfo = {
        restaurant1:{
            image: 'images/restaurantImages/rest1.jpg',
            title: 'Title1',
            more: '420 places'
        },
        restaurant2:{
            image: 'images/restaurantImages/rest2.jpg',
            title: 'Title2',
            more: '420 places'
        },
        restaurant3:{
            image: 'images/restaurantImages/rest3.jpg',
            title: 'Title3',
            more: '420 places'
        }
    };
    
    $scope.categories = {
        f1: {
            title: 'The place where be the restaurant',
            text: 'text text text text text text text text text text text text'
        },
        f2: {
            title: 'The place where be the restaurant',
            text: 'text text text text text text text text text text text text'
        },
        f3: {
            title: 'The place where be the restaurant',
            text: 'text text text text text text text text text text text text'
        },
        f4: {
            title: 'The place where be the restaurant',
            text: 'text text text text text text text text text text text text'
        },
        f5: {
            title: 'The place where be the restaurant',
            text: 'text text text text text text text text text text text text'
        },
        f6: {
            title: 'The place where be the restaurant',
            text: 'text text text text text text text text text text text text'
        },
        f7: {
            title: 'The place where be the restaurant',
            text: 'text text text text text text text text text text text text'
        }
    };

    $scope.places = [
        ['Abanda',  'Abbeville', 'Abbotsford', 'Abbott', 'Abbottstown', 'Abbyville', 'Abercrombie', 'Aberdeen', 'Aberdeen', 'Gardens'],
        ['Abanda',  'Abbeville', 'Abbotsford', 'Abbott', 'Abbottstown', 'Abbyville', 'Abercrombie', 'Aberdeen', 'Aberdeen', 'Gardens'],
        ['Abanda',  'Abbeville', 'Abbotsford', 'Abbott', 'Abbottstown', 'Abbyville', 'Abercrombie', 'Aberdeen', 'Aberdeen', 'Gardens'],
        ['Abanda',  'Abbeville', 'Abbotsford', 'Abbott', 'Abbottstown', 'Abbyville', 'Abercrombie', 'Aberdeen', 'Aberdeen', 'Gardens'],
        ['Abanda',  'Abbeville', 'Abbotsford', 'Abbott', 'Abbottstown', 'Abbyville', 'Abercrombie', 'Aberdeen', 'Aberdeen', 'Gardens'],
        ['Abanda',  'Abbeville', 'Abbotsford', 'Abbott', 'Abbottstown', 'Abbyville', 'Abercrombie', 'Aberdeen', 'Aberdeen', 'Gardens'],
    ];

});
