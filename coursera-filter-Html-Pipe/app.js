(function(){
    "use strict";

    var shoppingList = [
        "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
      ];

    
    angular.module("appFilter",[])
    .controller("FilterController", FilterController);
        
        function FilterController($scope){
            $scope.shoppingList = shoppingList ;
        }
})()