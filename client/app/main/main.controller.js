'use strict';

angular.module('noorApp').controller('MainCtrl', function ($scope, $http) {

    $scope.bricks = [
        {src: "https://www.filepicker.io/api/file/fQ7QhNQCS9vnvdeMmggR"},
        {src: "https://www.filepicker.io/api/file/f9U2KQoTHaAmuuMwEhFA"}
    ];

    var update = function(obj){
        var arr = [];

        for (var key in obj){
            arr.push({src: obj[key].picUrl});
        }

        console.log('arr ', arr);
        return arr; 
    }

    var getData= function(){
        ref.child('products').once('value', function(data) {
            var val = data.val();

            return update(val);
        });                    
    }

    //$scope.bricks = getData();
});

