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

          //$watchֻ���Լ���scope�����Ժͷ��������ܼ���һ����ͨ����
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