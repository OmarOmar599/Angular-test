(function () {
'use strict';

angular.module('SayingHi', [])

.controller('HiController', function ($scope) {
  $scope.name = "";
  $scope.apear = "false";

  $scope.clickAppear = function() {
    var appear = $scope.name
    if (appear === "true")
      $scope.apear = "true"
    else $scope.apear = "false"
  };

});


})();
