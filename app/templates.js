angular.module('website').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    "<!DOCTYPE html><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=\"IE=edge\"><title>Sébastien Romain</title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\"><meta name=apple-mobile-web-app-capable content=\"yes\"><base href=\"/\"><link rel=\"stylesheet prefetch\" href=\"/dist/style.min.css\"></head><body ng-app=website><div ng-view></div><script src=/dist/script.min.js></script></body>"
  );


  $templateCache.put('app/views/home/components/header/header.html',
    "<div id=header><div class=top-panel><div class=name>Sébastien Romain</div><div class=title>Développeur Full-Stack</div></div><ul class=\"menu-links row\"><li class=\"large-1 large-offset-2 column\" anchor-smooth-scroll=header>Home</li><li class=\"large-1 column\">About</li><li class=\"large-1 column\">Resume</li><li class=\"large-2 column\"><a href=https://twitter.com/romainseb target=_blank><i class=\"fa fa-twitter\"></i></a> <a href=https://github.com/romainseb target=_blank><i class=\"fa fa-github\"></i></a> <a href=https://fr.linkedin.com/pub/sébastien-romain/50/8a1/45a target=_blank><i class=\"fa fa-linkedin\"></i></a></li><li class=\"large-1 column\">Portfolio</li><li class=\"large-1 column\">Blog</li><li class=\"large-1 column\">Contact</li></ul></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div><sw-header></sw-header></div>"
  );

}]);
