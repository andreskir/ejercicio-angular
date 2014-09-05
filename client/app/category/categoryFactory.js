'use strict';

angular.module('topMeliSellersApp')
  .factory('CategoryFactory', function($resource){
    return $resource('https://api.mercadolibre.com/sites/MLA/categories');
  });
