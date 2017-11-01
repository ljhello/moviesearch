/**
 * Created by Administrator on 2017/10/31.
 */

(function(angular){

    var app=angular.module('coming',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/coming_soon',{
            templateUrl:'coming/coming.html',
            controller:'democontrole'
        })
    }])

    app.controller('democontrole',['$scope',function($scope){
        $scope.data=[];
    }])













})(angular)