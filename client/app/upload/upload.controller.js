'use strict';

angular.module('noorApp').controller('UploadCtrl', function ($scope) {
	$scope.product = {};
	filepicker.setKey('AUYVls2HfRBitF1c3S8GSz');
	var fileUpload;

	//When the user clicks the button, import a file using the Filepicker
	$scope.uploadPicture = function(){
		filepicker.pickMultiple({
			mimetype:"image/*",
			service: 'COMPUTER',
    			folders:true
		},  
		function(Blobs){
		  	$scope.product.picUrl = Blobs[0].url;

		  	console.log(fileUpload);
		});
	};


	$scope.submit = function(){
		ref.child('products').push($scope.product);
	}

});
