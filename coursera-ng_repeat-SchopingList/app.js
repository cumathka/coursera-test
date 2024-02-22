(function(){
    "use strict";
    let shoppingList1 = ["apple", "orange", "banane","kola","caffe","taha","calculate"] ;

    angular.module("shoppingApp",[])
    .controller("shoppingController",shoppingController);

    shoppingController.$inject=["$scope"];
    function shoppingController ($scope){
        $scope.shoppingList1 = shoppingList1;
        $scope.newItem = ""

        $scope.newItemList= function(){
            $scope.shoppingList1.push($scope.newItem);
            console.log($scope.shoppingList1);
            $scope.newItem = ""; // Clear newItem input field
        }

    }
})()