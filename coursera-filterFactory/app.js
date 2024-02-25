(function(){
  "use strict";

  angular.module("appFilter",[])
  .controller("FilterController",FilterController)
  .filter("loves",LovesFilter)


  FilterController.$inject = ["$scope","lovesFilter"]

  function FilterController ($scope,lovesFilter) {
    $scope.name = "kaya";
    $scope.status = "eins"

    $scope.message = function (){
      return "Cats likes eat together !!!"
    }

    $scope.messageFiltered = function (){
      let msg = "Cats likes eat together !!!" ;
      msg = lovesFilter(msg) ;
      return msg ;
    }

    $scope.FeedCats = function(){
      $scope.status = $scope.status === 'eins' ? 'zwei': 'eins';
    }
  }

  function LovesFilter(){
    return function (input){
      input = input || "" ;
      input = input.replace("likes","loves")
      return input ;
    }
  }
})()