(function(){
"use strict";

angular.module("UpApp",[])
.controller("AppController",AppController)


AppController.$inject=["$scope","$filter"]
function AppController ($scope, $filter){
    $scope.name= "kaya"

    $scope.upper= function(){
        let makeUpper = $filter("uppercase")
        $scope.name = makeUpper($scope.name);

        $scope.upper = function(){
            let makeUpper = $filter("uppercase")
            $scope.name = makeUpper($scope.name)
        }
    }
}





})()