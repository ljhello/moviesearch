/**
 * Created by Administrator on 2017/11/1.
 */
(function(angular){

    var app=angular.module('autoactive',[]);
    app.directive('autoActive',['$location',function($location){

      return {

          link:function(scope,element,attributes){

              element.on('click',function(){
                  element.parent().children().removeClass('active');

                  element.addClass('active');
              })

              scope.loca=$location;

          //$watch只可以监视scope的属性和方法，不能监听一个普通变量
              scope.$watch('loca.url()',function(now,old){
                  var hash=element.find('a').attr('href').substr(1);
                  if(now.startsWith(hash)){
                      element.parent().children().removeClass('active');

                      element.addClass('active');
                  }
              })


          }



      }








    }])
















})(angular)