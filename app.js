(function(){
"use strict";

angular.module("UpApp",[])
.controller("AppController",AppController)

function AppController ($scope, $filter,$injector){
    $scope.name= "kaya-cuma"

    $scope.upper= function(){
        let makeUpper = $filter("uppercase")
        $scope.name = makeUpper($scope.name);

        console.log($injector.annotate(AppController));
        $scope.upper = function(){
            let makeUpper = $filter("uppercase")
            $scope.name = makeUpper($scope.name)
        }
    }
}





})()