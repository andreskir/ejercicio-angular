'use strict';

angular.module('topMeliSellersApp')
  .controller('MainCtrl', function ($scope,$http,$resource, CategoryFactory) {
    CategoryFactory.query().$promise.then(function(categories) {
      $scope.categories = categories;
    });

    $scope.itemsByCategory = function(){
      $http.get('https://api.mercadolibre.com/sites/MLA/search?category=' + $scope.selectedCategory.id)
        .success(function(search){
          $scope.items = search.results;
        });
    };

    $scope.$watch('items', function(){
      $scope.earnings = mapEarnings( groupBySellers( $scope.items ) );
      $scope.sellersAndEarnings = [];
      for(var key in $scope.earnings){
        getNickname(key, function(id,nickname){
          var x = {
          'seller': nickname,
          'earn': $scope.earnings[id.toString()]
          };

          $scope.sellersAndEarnings.push(x);
        });
      }
    });

     var groupBySellers = function(items){
      return _.groupBy(items, function(item){
              return item.seller.id;
           });
    };

    var mapEarnings = function(itemsGroupBySellers){
      return _.mapValues(itemsGroupBySellers, function(items){
                var sales = _.map(items, function(item){
                  return item.sold_quantity * item.price;
                });
                var earnings = _.reduce(sales, function(sale1, sale2){
                  return sale1 + sale2;
                })

              return earnings;
            });
    };

    var getNickname = function(seller_id, callback){
      $http.get('https://api.mercadolibre.com/users/' + seller_id).
        success(function(seller){
          callback(seller.id,seller.nickname);
        });
    };
});