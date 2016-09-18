(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter']; 

function LunchCheckController($scope, $filter) {
  $scope.menu = "";
  $scope.toomany = "";

  $scope.calculateNumberOfItems = function () {
    var stringsplit = $scope.menu.trim();
    var numberOfItems = 0;
    
    if (stringsplit === "") $scope.toomany="Please enter data first";
    else {
    	 stringsplit = $scope.menu.split(",");
    	 numberOfItems = stringsplit.length;
    	 if (numberOfItems > 3) $scope.toomany = "Too much!";
    	 else $scope.toomany = "Enjoy!";
         }
  };

};


})();
