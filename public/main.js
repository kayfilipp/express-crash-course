var demoApp = angular.module('demoApp',[]);

demoApp.controller('mainController', ['$scope','$log' ,function($scope,$log){
	
	$scope.testString = 'Hello World';
	
}]);