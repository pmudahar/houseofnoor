'use strict';

angular.module('noorApp').controller('MainCtrl', function ($scope, $http, $firebase, ngDialog, $firebaseAuth, UserData, products, $state) {
	$scope.authObj = $firebaseAuth(ref);
	$scope.bricks = $firebase(ref.child('products')).$asArray();   
	$scope.favKeys = [];
	$scope.productType = '';

	if ($scope.authObj.$getAuth() != null){
		UserData($scope.authObj.$getAuth().uid).$bindTo($scope, 'user').then(function(){
			$scope.user.favorites = $scope.user.favorites || {};
			$scope.favKeys = Object.keys($scope.user.favorites);
		});
	}

	$scope.goTo = function(location){
		$state.go(location);
	};

	// add product into user favorites or remove if it already is in user favorites
	$scope.addFavorite = function(key, product){

		if ($scope.favKeys.indexOf(key) != -1)
			delete $scope.user.favorites[key];

		// else, add it
		else
			$scope.user.favorites[key] = product;

		$scope.favKeys = Object.keys($scope.user.favorites);
	}


	// move this to login route, just do a getAuth when you start
	$scope.login = function(){
			
		// oauth for google
		$scope.authObj.$authWithOAuthPopup("google").then(function(authData) {
		
			// sync with the firebase user object for specified uid and then 3-way bind to $scope.user
			// change this to take just the authData variable and pull the datapoints out of that
			UserData(authData.uid, 'M', 'Paul Mudahar').$bindTo($scope, 'user').then(function(){
				$scope.user.favorites = $scope.user.favorites || {};
				$scope.favKeys = Object.keys($scope.user.favorites);
			});

		}).catch(function(error) {
		  	console.error("Authentication failed:", error);
		});
	}


	$scope.logout = function(){
		$scope.authObj.$unauth();
		$scope.favKeys = [];
	}


	//add a field in bricks that is true if in users favorite, false if not
	$scope.clickToOpen = function(index){

		ngDialog.open( { 
			template: '/app/main/test.html?index=5',
			controller: 'ModalCtrl',
			data: {index: index},
			scope: $scope
		} );
	}

})


.controller('ModalCtrl', function ($scope, $http, $firebase, ngDialog) {
	$scope.product = $scope.bricks[$scope.ngDialogData.index];
});




