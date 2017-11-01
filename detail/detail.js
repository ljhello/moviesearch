/**
 * Created by Administrator on 2017/10/31.
 */

(function(angular){


    var app=angular.module('detail',['ngRoute','mysev']);

    app.config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/details/:id',{
            templateUrl:'./detail/detail.html',
            controller:'detailcontro'
        })


    }])

    app.controller('detailcontro',['$scope','mydemosev','$routeParams',function($scope,mydemosev,$routeParams){

        console.log($routeParams);
        mydemosev.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
            console.log(data);
            $scope.data=data;
            $scope.$apply();
        })
    }])












})(angular)