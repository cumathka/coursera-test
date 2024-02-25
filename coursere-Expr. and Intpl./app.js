(function(){
"use strict";

angular.module("appMsg",[])
.controller("MsgController",MsgController)

MsgController.$inject= ["$scope"]
function MsgController ($scope){
    $scope.name= "kaya"
    $scope.state ="eins"
    $scope.sayMessage = function (){
        return " cats likes to eat together" ;
    }

  $scope.changeCat = function(){
    $scope.state = $scope.state === 'eins' ? 'zwei'  : $scope.state === 'zwei' ? 'eins':"eins";
  }

}





})()