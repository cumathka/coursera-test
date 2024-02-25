(function(){
    "use strict";

    angular.module("codeApp",[])
    .controller("CodeAppController", CodeAppController);

    function CodeAppController ($scope){
        $scope.name= "" ;
        $scope.calCode = 0 ;

        $scope.displayCode = function (){
            let totalCalCode = CalStrCode($scope.name)
            $scope.calCode = totalCalCode
        }

        function CalStrCode (string){

            let calString = 0
            for (let index = 0; index < string.length; index++) {
                calString += string.charCodeAt(index);  
            }
            return calString;
        }






    }
})()