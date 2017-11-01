/**
 * Created by Administrator on 2017/10/31.
 */

(function(angular){
    console.log(123)
    var app=angular.module('nowhot',['ngRoute','mysev']);

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/:movieType/:page?',{
            templateUrl:'nowhot/nowhot.html',
            controller:'democontro'
        })

    }])

      app.controller('democontro',['$scope','$http','mydemosev','$routeParams','$route',function($scope,$http,mydemosev,$routeParams,$route){
        /*  $http.get('nowhot/data.json').then(function(res){
              $scope.data=res.data;
          })*/

          console.log($routeParams);
          $scope.loading=true;

          $scope.pageSize=5;
          $scope.page=($routeParams.page || '1')-0;

          var start=($scope.page-1)*$scope.pageSize;


          mydemosev.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType,{start:start,count:$scope.pageSize,q:$routeParams.q},function(data){
              //console.log(data);
              $scope.data=data;
              $scope.totalpage=Math.ceil($scope.data.total/$scope.pageSize);
              $scope.loading=false;
              $scope.$apply( );

          })

          $scope.getpage=function(newpage){

              if(newpage<=0 || newpage>$scope.totalpage){
                  return;
              }

              $route.updateParams({page:newpage});
          }





      }])

})(angular)