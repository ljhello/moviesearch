/**
 * Created by Administrator on 2017/10/31.
 */

(function(angular){

   var app=angular.module('top250',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/top250',{
            templateUrl:'top250/top250.html',
            controller:'topcontroller'
        })
    }])

   app.controller('topcontroller',["$scope",function($scope){

   }])













})(angular)