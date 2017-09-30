angular.module('app', [])

.controller('RootCtrl', ['$scope', function($scope) {
  $scope.data = {}
  $scope.handleSubmit = function(e) {
    console.log('SUBMISSION', e);
    console.log($scope.data);
    e.preventDefault();
  }
}]);