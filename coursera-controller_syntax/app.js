(function(){
    "use strict";
    angular.module("ControllerAsApp",[])
    .controller("ParentController1",ParentController1)
    .controller("ChildController1", ChildController1)


    ParentController1.$inject = ["$scope"];
    function ParentController1($scope){
        $scope.parentValue = 1;
        $scope.pc = this ;
        $scope.pc.parentValue = 1;
    }


    ChildController1.$inject = ["$scope"];
    function ChildController1 ($scope){
        console.log("$scope.parentValue :",$scope.parentValue);
        console.log("CHILD $scope:",$scope);

        $scope.parentValue = 5 ;

        console.log("*** Changed : $scope.parentValue = 5 ***");
        console.log("$scope.parentValue :",$scope.parentValue);
        console.log($scope);

        console.log("$scope.pc.parentValue :",$scope.pc.parentValue);
        $scope.pc.parentValue = 5 ;
        console.log("*** Changed : $scope.pc.parentValue =5 ***");
        console.log("$scope.pc.parentValue :",$scope.pc.parentValue);
        console.log("$scope :",$scope);
        
        console.log("$scope.$parent.parentValue :",$scope.$parent.parentValue);

    }
    


})()