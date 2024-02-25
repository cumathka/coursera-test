(function(){
    "use strict";

    angular.module("appBinding",[])
    .controller ("bindingController",bindingController)

    function bindingController ($scope){
        $scope.firstName = "John " ;
        //$scope.fullName = "";


        $scope.showNumbersOfWatchers = function (){
            console.log("# of watchers" , $scope.$$watchersCount);
        }

        $scope.setFullName = function (){
            $scope.fullName = $scope.firstName + " " + "KAYA" ;
        }

        $scope.logFirstName = function (){
            console.log("First Name : ", $scope.firstName);;
        }

        $scope.logFullName = function (){
            console.log("Full Name : ", $scope.fullName);
        }




    }


})()