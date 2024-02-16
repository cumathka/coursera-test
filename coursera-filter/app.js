(function(){
"use strict";

angular.module("appMsg",[])
.controller("MsgController",MsgController)

MsgController.$inject= ["$scope","$filter"]
function MsgController ($scope,$filter){
    $scope.name= "kaya"
    $scope.state ="eins"
    $scope.cost = 0.45
    $scope.sayMessage = function (){
      let msg = " cats likes to eat together"
      let  output = $filter("uppercase")(msg)
        return output ;
    }

  $scope.changeCat = function(){
    $scope.state = $scope.state === 'eins' ? 'zwei'  : $scope.state === 'zwei' ? 'eins':"eins";
  }

}





})()