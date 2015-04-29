angular.module('website').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/home/components/sroAbout/sroAbout.html',
    "<div id=sroAbout class=row><div class=\"large-4 large-offset-2 column\"><div class=\"large-8 column text-center\"><div class=name>Sébastien Romain</div><div class=title>Développeur Web</div><div class=title>Région nantaise</div><a href=/data/cv.pdf target=_blank class=link-cv>Télécharger mon CV</a></div><div class=\"large-4 column profile-photo-container\"><img class=profile-photo src=/img/moi.png></div></div><div class=\"large-6 right-part column\"><div class=\"large-8 column\"><p>Développeur avec 5 ans d’expériences, je suis actuellement référent technique AngularJS pour un projet comptant environ quarante personnes. Passionné par mon métier, qui m’offre l’opportunité de rechercher et d’imaginer des solutions aux besoins des entreprises et des utilisateurs, et curieux de nature je m’intéresse à l’évolution des technologies qui apparaissent sur le marché. Spécialiste du développement web, je m'intéresse tout particulièrement au monde Javascript et à ses différents framework.</p></div></div></div>"
  );


  $templateCache.put('app/views/home/components/sroContact/sroContact.html',
    "<div id=sroContact><div class=entete><h2>- Contact -</h2></div><div class=\"container large-offset-3 large-6\"><div ng-if=\"sroContact.currentState == 0\" class=form-height><div class=information>Pour me contacter, veuillez remplir le formulaire ci dessous</div><form ng-submit=sroContact.submit() name=sroForm class=sro-form><div class=\"large-6 column\"><input id=contact-name placeholder=\"Nom *\" name=name ng-model=sroContact.contact.name required></div><div class=\"large-6 column\"><input id=contact-email placeholder=\"Email *\" type=email name=email ng-model-options={debounce:500} ng-model=sroContact.contact.email></div><div class=\"large-12 column\"><textarea id=contact-content type=text placeholder=\"Message *\" name=content ng-model=sroContact.contact.content required></textarea><button class=small type=submit>Envoyer</button></div><div class=clearfix></div></form></div><div ng-if=\"sroContact.currentState == 1\" class=form-height><div class=form-error><div class=text-error>Envoi en cours ...</div></div></div><div ng-if=\"sroContact.currentState == 2\" class=\"form-height sweet-alert\"><div class=form-error><div class=\"sa-icon sa-success animate\" style=\"display: block\"><span class=\"sa-line sa-tip animateSuccessTip\"></span> <span class=\"sa-line sa-long animateSuccessLong\"></span><div class=sa-placeholder></div><div class=sa-fix></div></div><div class=text-error>Votre message a bien été envoyé !</div></div></div><div ng-if=\"sroContact.currentState == 3\" class=\"form-height sweet-alert\"><div class=form-error><div class=\"sa-icon sa-error animateErrorIcon\" style=\"display: block\"><span class=\"sa-x-mark animateXMark\"><span class=\"sa-line sa-left\"></span> <span class=\"sa-line sa-right\"></span></span></div><div class=text-error>Erreur lors de l'envoi du mail</div><div class=sub-text-error>Solution de secours, vous pouvez toujours envoyer un mail à <a href=mailTo:sebastien.romain@gmail.com>cette adresse</a> !</div></div></div></div><div class=bottom-margin></div></div>"
  );


  $templateCache.put('app/views/home/components/sroHeader/sroHeader.html',
    "<div id=sroHeader><div class=top-panel><div class=name>Sébastien Romain</div><div class=title>Développeur Web</div></div><ul class=\"menu-links row\" du-scrollspy ng-class=\"{'menu-fixed':sroHeader.menuFixed}\"><li class=\"small-7 column hidden-not-mobile\">Sébastien Romain</li><li class=\"large-3 large-offset-2 column hidden-mobile text-right\"><a href=#sroHeader du-smooth-scroll>Accueil</a> <a href=#sroAbout du-smooth-scroll>A Propos</a> <a href=#sroResume du-smooth-scroll>Parcours</a></li><li class=\"large-2 small-5 column\"><a href=https://twitter.com/romainseb target=_blank><i class=\"fa fa-twitter\"></i></a> <a href=https://github.com/romainseb target=_blank><i class=\"fa fa-github\"></i></a> <a href=https://fr.linkedin.com/pub/sébastien-romain/50/8a1/45a target=_blank><i class=\"fa fa-linkedin\"></i></a></li><li class=\"large-5 column hidden-mobile text-left\"><a href=#sroSkills du-smooth-scroll>Compétences</a> <a href=#sroStudies du-smooth-scroll>Formations</a> <a href=#sroContact du-smooth-scroll>Contact</a></li></ul></div>"
  );


  $templateCache.put('app/views/home/components/sroResume/sroResume.html',
    "<div id=sroResume><div class=entete><h2>- Parcours professionnel -</h2></div><div class=\"container large-offset-3 large-6\"><div class=information>Cliquez sur un projet pour en afficher les détails</div><div ng-repeat=\"entreprise in sroResume.jobs\" class=job><div class=entreprise><img class=entreprise-logo ng-src=\"{{entreprise.logo}}\"><div class=date><a ng-href={{entreprise.entrepriseLink}} target=_blank class=entreprise-name>{{entreprise.entrepriseName}}</a> - {{entreprise.dateBegin}} à {{entreprise.dateEnd}}</div></div><div ng-repeat=\"project in entreprise.projects\" ng-style=\"sroResume.getBorderLeftStyle(project.borderColor, (!sroResume.isProjectSelected(project.projectName) && $last ))\" class=project ng-class=\"{'no-border' : !(sroResume.isProjectSelected(project.projectName) && $last == true)}\"><div ng-click=sroResume.changeSelectedProject(project.projectName) class=project-header><img class=project-logo ng-src={{project.logo}} ng-style=sroResume.getBorderStyle(project.borderColor)><div ng-style=sroResume.getProjectBottomBorder(project) class=project-title>Projet {{project.projectName}} - {{project.jobTitle}} - {{project.dateBegin}} à {{project.dateEnd}}</div></div><div collapse=!sroResume.isProjectSelected(project.projectName) class=angular-animate><div>{{project.description}}</div><ul><li ng-repeat=\"task in project.taskList\">{{task}}</li></ul><p>Technologies</p><div>Front-end : <span ng-repeat=\"tech in project.technologies.frontEnd\">{{tech}} <span ng-if=!$last>,&nbsp;</span></span></div><div>Back-end : <span ng-repeat=\"tech in project.technologies.backEnd\">{{tech}} <span ng-if=!$last>,&nbsp;</span></span></div><div>Environnement : <span ng-repeat=\"tech in project.technologies.backEnd\">{{tech}} <span ng-if=!$last>,&nbsp;</span></span></div><div class=special-content ng-bind-html=sroResume.validHtml(project.specialContent)></div><img ng-src={{image}} ng-repeat=\"image in project.images\"></div></div></div></div><div class=bottom-margin></div></div>"
  );


  $templateCache.put('app/views/home/components/sroSkillBlock/sroSkillBlock.html',
    "<div class=sroSkillBlock><h3>{{sroSkillBlock.block.categoryName}}</h3><div ng-repeat=\"technology in sroSkillBlock.block.technologies\"><div class=technology>{{technology.name}}</div><div class=percent-container><div class=percent ng-style=\"sroSkillBlock.getBarColor(sroSkillBlock.block, technology)\"></div><div class=empty></div></div></div></div>"
  );


  $templateCache.put('app/views/home/components/sroSkills/sroSkills.html',
    "<div id=sroSkills><div class=entete><h2>- Compétences -</h2></div><div class=\"container large-offset-3 large-6\"><sro-skill-block ng-repeat=\"category in sroSkills.skillCategories\" block=category></sro-skill-block></div><div class=bottom-margin></div></div>"
  );


  $templateCache.put('app/views/home/components/sroStudies/sroStudies.html',
    "<div id=sroStudies><div class=entete><h2>- Formations -</h2></div><div class=\"container large-offset-3 large-6\"><div ng-repeat=\"study in sroStudies.studies\" class=study><div class=icon><i class=\"fa fa-graduation-cap\" ng-if=\"study.type == 'study'\"></i> <i class=\"fa fa-trophy\" ng-if=\"study.type == 'certification'\"></i></div><div class=study-text ng-class=\"{'certification' : study.type == 'certification'}\"><div><a target=_blank ng-href={{study.link}}>{{study.name}}</a> - {{study.date}}</div><div>{{study.subName}}</div><div>{{study.location}}</div></div></div></div><div class=bottom-margin></div></div>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div id=home><sro-header></sro-header><sro-about></sro-about><sro-resume></sro-resume><sro-skills></sro-skills><sro-studies></sro-studies><sro-contact></sro-contact></div>"
  );

}]);
