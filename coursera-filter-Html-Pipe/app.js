(function(){
    "use strict";
    
    angular.module("appFilter",[])
    .controller("FilterController", FilterController);
        
        function FilterController($scope){
            $scope.name="cuma"

        }
})()