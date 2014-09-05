'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('topMeliSellersApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('https://api.mercadolibre.com/sites/MLA/categories')
      .respond([
        {id: "MLA5725", name: "Accesorios para Vehículos"},
        {id: "MLA1071", name: "Animales y Mascotas"},
        {id: "MLA1367", name: "Antigüedades"}
      ]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of categories to the scope', function () {
    $httpBackend.flush();
    expect(scope.categories.length).toBe(3);
  });
});
