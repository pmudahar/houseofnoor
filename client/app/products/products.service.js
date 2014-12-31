'use strict';

angular.module('noorApp')
  .factory('products', function ($FirebaseArray, $firebase) {

    var ProductFactory = $FirebaseArray.$extendFactory({
    
      getTotal: function() {
        console.log('hi', this.$list);
        var total = 0;
        
        // the array data is located in this.$list
        angular.forEach(this.$list, function(rec) {
          console.log('what');
        });
        
        return total;

      }

    });

    // Public API here
    return function(ref) {
      console.log('hello');

      // override the factory used by $firebase
      var sync = $firebase(ref, {arrayFactory: ProductFactory});
      
      return sync.$asArray(); // this will be an instance of TotalFactory
    }

  });
