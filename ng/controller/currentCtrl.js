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
        name: 'The best restaurant in the world'
    };

    $scope.togglePhoneNumber = function(){
        $scope.openPhoneInput = $scope.openPhoneInput === false ? true: false;
    }
});
