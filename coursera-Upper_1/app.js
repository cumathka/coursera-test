(function(){
    "use strict";

    angular.module("UpApp",[])
    .controller("AppController",AppController)

    function AppController ($scope, $filter){
            $scope.name= "kaya"

            $scope.upper = function(){
                let upMaker = $filter("uppercase")
                $scope.name = upMaker($scope.name)
            }


    }


})()