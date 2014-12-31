'use strict';

angular.module('noorApp')
  .factory('User', function () {
    var uid;
    
    var user = {
      gender: '',
      name: '',
      favorites: []
    }

    // Public API here
    return {
      set: function () {
        console.log('hello');
        //user[property] = value;
      }
    };

  });
