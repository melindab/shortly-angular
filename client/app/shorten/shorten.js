angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(url) {
    console.log($location);
    Links.addLink(url).then(function(links) {
      //$scope.links = links;
    });

  };

});
