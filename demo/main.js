/* globals angular */
'use strict';

var app = angular.module('ngApp', ['apicklist']);

app.controller('demoController', function ($scope) {

  $scope.leftList = [];
  $scope.rightList = [];

  for (var i = 0; i < 5; i++) {
    $scope.leftList.push("left" + i);
    $scope.rightList.push("right" + i);
  }
});
