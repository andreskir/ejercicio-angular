'use strict';

angular.module('topMeliSellersApp')
  .controller('MainCtrl', function ($scope, CategoryFactory) {
    CategoryFactory.query().$promise.then(function(categories) {
      $scope.categories = categories;
    });
  });
