(function(){
  "use strict";
  angular.module("asApp",[])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = "";
    
    $scope.CheckLunch = function(){
      let list = $scope.items.split(',');
      let itemCount = list.filter(item => item.trim() !== '').length;
      if(itemCount === 0){
        $scope.message = "Please enter data first!";
      } else if(itemCount <= 3){
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
