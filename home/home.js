/**
 * Created by Administrator on 2017/10/31.
 */

(function(angular){

    var app=angular.module('home',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'home/home.html',
            controller:'homecontroller'
        })
    }])

      app.controller('homecontroller',['$scope',function($scope){
          console.log(123)
      }])



})(angular)

