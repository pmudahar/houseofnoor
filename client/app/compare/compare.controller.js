'use strict';

angular.module('noorApp')
  .controller('CompareCtrl', function ($scope, UserData, $firebaseAuth, $firebase) {
  	$scope.favorites = [];
  	$scope.authObj = $firebaseAuth(ref);  	
  	$scope.divs = [];
  	$scope.showMenu = false;


  	//photos array, contains current product for each div
  	$scope.photos = [];

  	console.log($scope.authObj.$getAuth().uid);

  	// sync with the firebase user object for specified uid and then 3-way bind to $scope.user
  	$scope.user = UserData($scope.authObj.$getAuth().uid, 'M', 'Paul Mudahar');

 	//convert user favorites into array
  	$scope.user.$loaded().then(function(){
  		for (var key in $scope.user.favorites)
  			$scope.favorites.push($scope.user.favorites[key]);

  		console.log('favorites ', $scope.favorites);
  	});


  	$scope.filterType = function(div, type){
  		$scope.divs.push({
  			_index: 0,
  			favorites: []
  		});

  		$scope.divs[div].favorites = $scope.favorites.filter(function(el){
			return el.type === type;
  		});

  		$scope.showMenu = false;

  	};


  	$scope.isActive = function(div, index){
  		return div._index === index;
  	}


    	$scope.getNext = function(div){
		div._index = (div._index < div.favorites.length - 1) ? ++div._index : 0;
    	};


    	$scope.getPrev = function(div){
    		div._index = (div._index > 0) ? --div._index: div.favorites.length - 1;
    	};

  });
