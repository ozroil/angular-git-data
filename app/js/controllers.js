'use strict';

// Declare the app module
var gitdataApp = angular.module('gitdataApp', []);

// Controllers
gitdataApp.controller('GitDataController', ['$scope', '$http', 
    function($scope, $http){
        $http.get('https://api.github.com/repos/dojo/dojo/pulls').success(function(data) {
        $scope.gitdata = data;
    });
    
}]);


