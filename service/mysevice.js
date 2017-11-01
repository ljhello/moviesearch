/**
 * Created by Administrator on 2017/10/31.
 */
(function(angular){

 var app=angular.module('mysev',[]);

    app.service('mydemosev',['$window',function($window){

        this.jsonp= function(url,arg,fn){
            var scrp=$window.document.createElement('script');
            //Æ´½ÓurlºÍarg
            var querystring="";
            for(var key in arg){
                querystring+=key+"="+arg[key]+"&"
            }
            var funName="myjsonp"+$window.Math.random().toString().substr(2);
            url+="?"+querystring+"callback="+funName;

            /*  window.testFunc=function(data){
             fn(data);
             }*/
            $window[funName]=function(data){
                fn(data);
            }

            scrp.src=url;

            $window.document.body.appendChild(scrp);
        }




    }])











})(angular)