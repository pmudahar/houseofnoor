'use strict';

angular.module('noorApp').controller('MainCtrl', function ($scope, $http, $firebase) {

    var sync = $firebase(ref);
    var firebaseObj = sync.$asObject();
    $scope.bricks = [];

    firebaseObj.$loaded().then(function(){
        angular.forEach(firebaseObj.products, function(value, key){
            $scope.bricks.push({src: value.picUrl});
        });
    });

});

