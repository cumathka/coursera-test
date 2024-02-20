(function(){
"use strict";
angular.module("appCounter",[])
.controller("counterController",counterController)

counterController.$inject=["$scope","$timeout"] 
function counterController ($scope,$timeout) {
$scope.counter = 0 ;


$scope.upCounter = function(){
    $timeout(function(){
        $scope.counter++;
        console.log("incremented...");
    },2000)

}

/*
 $scope.upCounter = function (){
     setTimeout(function(){
         $scope.$apply(function(){
             $scope.counter++;
             console.log("incremented...");
         })
     }, 2000); };

/*     
/*
$scope.upCounter = function(){
setTimeout(function(){
    $scope.counter ++ ;
    console.log("incremented...");
    $scope.$digest();
},2000)

}

*/



}

})()