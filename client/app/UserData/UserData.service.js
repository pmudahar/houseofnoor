'use strict';

angular.module('noorApp')
  .factory('UserData', function ($firebase) {

      return function(uid, gender, name, email){

        var userObj = $firebase(ref.child('users').child(uid)).$asObject();

        userObj.$loaded(function(){
          if (userObj.$value === null){
            angular.extend(userObj, {
              gender: gender,
              name: name,
              favorites: []
            });

            userObj.$save();
          }
        });

        return userObj;
      };



    //};
  });
