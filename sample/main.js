var myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
	return {message: "I'm a data from a service"}
})

myApp.filter('reverse', function(){
	return function (text){
		return text.split("").reverse().join("");
	}
})

function firstCtrl($scope, Data){
	$scope.data = Data;
}

function secondCtrl($scope, Data){
	$scope.data = Data;
	
	$scope.reversedMessage = function(message){
		return message.split("").reverse().join("");
	}
}
