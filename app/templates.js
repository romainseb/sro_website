angular.module('website').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/home/components/sroAbout/sroAbout.html',
    "<div id=sroAbout class=row><div class=\"large-4 large-offset-2 column\"><div class=\"large-8 column\"><div class=name>Sébastien Romain</div><div class=title>Développeur Web</div></div><div class=\"large-4 column profile-photo-container\"><img class=profile-photo src=/img/moi.png></div></div><div class=\"large-6 right-part column\"><div class=\"large-8 column\"><p>Développeur avec 5 ans d’expériences, je suis actuellement référent technique AngularJS pour un projet comptant environ quarante personnes. Passionné par mon métier, qui m’offre l’opportunité de rechercher et d’imaginer des solutions aux besoins des entreprises et des utilisateurs, et curieux de nature je m’intéresse à l’évolution des technologies qui apparaissent sur le marché. Spécialiste du développement web, je m'intéresse tout particulièrement au monde Javascript et à ses différents framework.</p></div></div></div>"
  );


  $templateCache.put('app/views/home/components/sroHeader/sroHeader.html',
    "<div id=sroHeader><div class=top-panel><div class=name>Sébastien Romain</div><div class=title>Développeur Web</div></div><ul class=\"menu-links row\" du-scrollspy ng-class=\"{'menu-fixed':sroHeader.menuFixed}\"><li class=\"large-1 large-offset-2 column\"><a href=#sroHeader du-smooth-scroll>Home</a></li><li class=\"large-1 column\"><a href=#sroAbout du-smooth-scroll>About</a></li><li class=\"large-1 column\"><a href=#sroResume du-smooth-scroll>Resume</a></li><li class=\"large-2 column\"><a href=https://twitter.com/romainseb target=_blank><i class=\"fa fa-twitter\"></i></a> <a href=https://github.com/romainseb target=_blank><i class=\"fa fa-github\"></i></a> <a href=https://fr.linkedin.com/pub/sébastien-romain/50/8a1/45a target=_blank><i class=\"fa fa-linkedin\"></i></a></li><li class=\"large-1 column\">Portfolio</li><li class=\"large-1 column\">Blog</li><li class=\"large-1 column\">Contact</li></ul></div>"
  );


  $templateCache.put('app/views/home/components/sroResume/sroResume.html',
    "<div id=sroResume><div class=entete><h2>- Parcours professionnel -</h2></div><div class=\"container large-offset-3 large-6\"><div class=information>Cliquez sur un projet pour en afficher les détails</div><div ng-repeat=\"entreprise in sroResume.jobs\" class=job><div class=entreprise><img class=entreprise-logo ng-src=\"{{entreprise.logo}}\"><div class=date><span class=entreprise-name>{{entreprise.entrepriseName}}</span> - {{entreprise.dateBegin}} à {{entreprise.dateEnd}}</div></div><div ng-repeat=\"project in entreprise.projects\" ng-style=\"sroResume.getBorderLeftStyle(project.borderColor, (sroResume.selectedProject != project.projectName && $last ))\" class=project ng-class=\"{'no-border' : (sroResume.selectedProject != project.projectName && $last == true)}\"><div ng-click=sroResume.changeSelectedProject(project.projectName) class=project-header><img class=project-logo ng-src={{project.logo}} ng-style=sroResume.getBorderStyle(project.borderColor)><div>Projet {{project.projectName}} pour {{project.client}} - {{project.jobTitle}}</div></div><div collapse=\"sroResume.selectedProject != project.projectName\"><div>{{project.description}}</div><div ng-repeat=\"task in project.taskList\">{{task}}</div><div><span ng-repeat=\"tech in project.technologies\">{{tech}}</span></div><div ng-bind-html=sroResume.validHtml(project.specialContent)></div></div></div></div></div></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div id=home><sro-header></sro-header><sro-about></sro-about><sro-resume></sro-resume></div>"
  );

}]);
