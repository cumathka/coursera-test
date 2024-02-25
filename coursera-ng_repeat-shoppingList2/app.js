(function(){
    "use strict";
    let shoppingList2 = [
        {
            name : "apple",
            quantity: 52
        },
        {
            name : "orange",
            quantity: 13 
        },
        {
            name : "banane",
            quantity: 32 
        },
        {
            name : "kola",
            quantity: 14 
        },
        {
            name : "caffe",
            quantity: 13 
        },
    ] ;

   angular.module("appList" ,[])
   .controller("ListController",ListController);

   ListController.$inject = ["$scope"];
   
   function ListController ($scope) {
    $scope.shoppingList2 = shoppingList2;
    console.log($scope.shoppingList2);

    $scope.addToList = function(){
        let newList = {
            name  :$scope.newItemName,
            quantity :$scope.newItemQuantity}

        $scope.shoppingList2.push(newList);
        console.log(newList);
        $scope.newItemName = "";
        $scope.newItemQuantity ="";
    }

   }
    
})()