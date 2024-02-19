(function(){
  "use strict";
  angular.module("appFilter",[])
  .controller("FilterController",FilterController)
  .filter ("loves", LovesFilter)
  .filter ("new", NewFilter)

  FilterController.$inject = ["$scope","lovesFilter"]

  function FilterController ($scope ,lovesFilter){

    $scope.name = "kaya"
    $scope.state = "eins"

    $scope.changeImg = function(){
      $scope.state = $scope.state === "eins" ? "zwei" : "zwei" ? "eins" : "eins" ;
    }

    $scope.oldMessage = function(){
      let msg = "Cats likes eats together"
      return msg ;
    }

    $scope.newMessage = function() {
      let msg = "Cats likes eats together"
      msg = lovesFilter(msg)
      return msg ;
    }

  }

  function  LovesFilter () {
    return function (input){
      input = input || "" ;
      input = input.replace("likes", "LOVES")
      return input ;
    }
  }

  function  NewFilter () {
    return function (input,arg1,arg2){
      input = input || "" ;
      input = input.replace(arg1,arg2)
      return input ;
    }
  }



})()