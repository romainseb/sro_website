angular.module('website').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    "<!DOCTYPE html><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=\"IE=edge\"><title>Sébastien Romain</title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\"><meta name=apple-mobile-web-app-capable content=\"yes\"><base href=\"/\"><link rel=\"stylesheet prefetch\" href=\"/dist/style.min.css\"></head><body ng-app=website><div ng-view></div><script src=/dist/script.min.js></script></body>"
  );


  $templateCache.put('app/views/home/components/header/header.html',
    "<div id=header><div class=name>Sébastien Romain</div><div class=title>Développeur Full-Stack</div><li>{{header.maValeur}}</li></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div><sw-header></sw-header></div>"
  );

}]);
