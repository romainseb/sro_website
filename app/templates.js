angular.module('website').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    "<!DOCTYPE html><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=\"IE=edge\"><title>Sébastien Romain</title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\"><meta name=apple-mobile-web-app-capable content=\"yes\"><base href=\"/\"><link rel=stylesheet href=\"/dist/style.min.css\"></head><body ng-app=website><div ng-view></div><script src=/dist/script.min.js></script></body>"
  );


  $templateCache.put('app/views/home/components/sroAbout/sroAbout.html',
    "<div id=sroAbout class=row><div class=\"large-12 right-part column\"><div class=row><div class=\"column large-offset-2 large-2 profile-photo-container\"><img class=profile-photo src=/img/moi.png></div><div class=\"column large-6\"><div class=name>Sébastien Romain</div><div class=title>Développeur Web</div><p>Développeur avec 5 ans d’expériences, je suis actuellement référent technique AngularJS pour un projet comptant environ quarante ressources. Passionné par mon métier, qui m’offre l’opportunité de rechercher et d’imaginer des solutions aux besoins des entreprises et des utilisateurs, et curieux de nature je m’intéresse à l’évolution des technologies qui apparaissent sur le marché. Spécialiste du développement web, je m'intéresse tout particulièrement au monde Javascript et à ses différents framework.</p></div></div></div></div>"
  );


  $templateCache.put('app/views/home/components/sroHeader/sroHeader.html',
    "<div id=sroHeader><div class=top-panel><div class=name>Sébastien Romain</div><div class=title>Développeur Web</div></div><ul class=\"menu-links row\" du-scrollspy ng-class=\"{'menu-fixed':sroHeader.menuFixed}\"><li class=\"large-1 large-offset-2 column\"><a href=#sroHeader du-smooth-scroll>Home</a></li><li class=\"large-1 column\"><a href=#sroAbout du-smooth-scroll>About</a></li><li class=\"large-1 column\">Resume</li><li class=\"large-2 column\"><a href=https://twitter.com/romainseb target=_blank><i class=\"fa fa-twitter\"></i></a> <a href=https://github.com/romainseb target=_blank><i class=\"fa fa-github\"></i></a> <a href=https://fr.linkedin.com/pub/sébastien-romain/50/8a1/45a target=_blank><i class=\"fa fa-linkedin\"></i></a></li><li class=\"large-1 column\">Portfolio</li><li class=\"large-1 column\">Blog</li><li class=\"large-1 column\">Contact</li></ul></div>"
  );


  $templateCache.put('app/views/home/components/sroResume/sroResume.html',
    "<div class=sroResume></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div><sro-header></sro-header><sro-about></sro-about></div>"
  );

}]);
