  (function(){
    "use strict";

    angular.module("calculateName",[])
    .controller("CalculateNameController",function($scope){
        $scope.name = "";
        $scope.nameValue = 0;

        $scope.displayNameCode = function(){
            let totalNameValue = calculateNameCode($scope.name)
            $scope.nameValue = totalNameValue;
        }

        function calculateNameCode(string) {
            let codeValue =0 ;
            for (let index = 0; index < string.length; index++) {
                codeValue += string.charCodeAt(index);
                
            }
            return codeValue;
            
        }


    })






  })()