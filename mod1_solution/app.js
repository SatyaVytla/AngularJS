(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  function LunchCheckController($scope) {
    $scope.orderList = "";
    $scope.result = "";

    $scope.orderStatus = function(){
      var status = checkOrder($scope.orderList);
      $scope.result = status;
    };
    function checkOrder(string) {
      if(string.trim()=="")
          return "Please enter data first";

      var numOfWords = string.split(',');
      var actualCount =0;
      for(var i=0;i<numOfWords.length;i++){
      if(numOfWords[i].trim() != "")
         actualCount++;
    }
      if(actualCount>3)
        return "Too much!";
      else
        return "Enjoy!";
    }
  }
})();
