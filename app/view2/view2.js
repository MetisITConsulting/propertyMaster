'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
  var property = this;
  property.propertyTypes = ['Detatched House', 'Semi', 'Bungalow', 'Flat', 'Studio'];

  property.master = {};

  property.update = function(edit){
    property.master = angular.copy(edit);
  }

}]);