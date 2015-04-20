angular.module('website').controller('SroResumeController',
    function ($sce) {

        this.selectedProject = null;

        this.validHtml = function validHtml(value) {
            return $sce.trustAsHtml(value);
        };

        this.getBorderLeftStyle = function getBorderLeftStyle(color, hideColor) {
            var obj = {
                borderLeftColor: "transparent"
            };
            if (!hideColor) {
                obj.borderLeftColor = color;
            }
            return obj;
        };

        this.getBorderStyle = function getBorderLeftStyle(color) {
            var obj = {
                borderColor: color
            };
            return obj;
        };

        this.changeSelectedProject = function changeSelectedProject(projectName) {
            if (projectName === this.selectedProject) {
                this.selectedProject = null;
            }
            else {
                this.selectedProject = projectName;
            }
        };

        this.jobs = [
            {
                entrepriseName: "Sopra Steria",
                logo: "/img/sopra-steria.jpeg",
                dateBegin: "Octobre 2013",
                dateEnd: "Maintenant",
                borderColor: "#cf6e0e",
                projects: [
                    {
                        logo: "/img/erdf.jpg",
                        borderColor: "#2285a2",
                        jobTitle: "Référent technique",
                        projectName: "Tamaris",
                        client: "ERDF",
                        dateBegin: "Octobre 2013",
                        dateEnd: "Maintenant",
                        description: "Participation aux évolutions de l'outil permettant la planification d'activités et la traçabilité de l’ensemble des interventions des agents ERDF",
                        taskList: [
                            "Référent technique AngularJS",
                            "Référent technique au sein des versions de build",
                            "Développement, tests unitaires et d'intégration",
                            "Rédaction de conception détaillée"
                        ],
                        technologies: [
                            "AngularJS",
                            "HTML5",
                            "CSS3",
                            "Grunt",
                            "Adobe Air",
                            "Apache Flex",
                            "Java J2EE",
                            "Weblogic",
                            "Maven",
                            "Hibernate",
                            "Spring"
                        ],
                        specialContent: '<div style="text-align: center">' +
                        '<iframe src="https://player.vimeo.com/video/28989130"' +
                        'width="500"' +
                        'height="281"' +
                        'frameborder="0"' +
                        "webkitallowfullscreen mozallowfullscreen allowfullscreen>" +
                        "</iframe>" +
                        "</div>"

                    }
                ]
            },
            {
                entrepriseName: "CGI",
                logo: "/img/cgi.jpg",
                dateBegin: "Avril 2010",
                dateEnd: "Septembre 2013",
                projects: [
                    {
                        logo: "/img/ca.jpg",
                        jobTitle: "Ingénieur NTI",
                        borderColor: "#188781",
                        projectName: "PUCC",
                        client: "Crédit Agricole",
                        dateBegin: "Janvier 2012",
                        dateEnd: "Octobre 2013",
                        description: "Participation à la refonte du portail interne / externe du crédit agricole pour les collaborateurs et les clients. Mission sur site. Projet national.",
                        taskList: [
                            "Développement d'IHM et services",
                            "Conception détaillée",
                            "Participation au chiffrage d'un projet ( Planning Poker, Chiffrage à dire d'expert, Abaques )",
                            "Réunions d'architecture"
                        ],
                        technologies: [
                            "Architecture SOA",
                            "Java",
                            "Maven",
                            "Jquery",
                            "CSS3",
                            "HTML5",
                            "Centrasite",
                            "Suite IBM",
                            "WebSphere"
                        ]
                    },
                    {
                        logo: "/img/rc.jpg",
                        jobTitle: "Référent Technique",
                        borderColor: "#c60f13",
                        projectName: "E-Retailing",
                        client: "Royal Canin",
                        dateBegin: "Septembre 2011",
                        dateEnd: "Décembre 2011",
                        description: "Réalisation d'un site permettant aux revendeurs de produits Royal Canin de récupérer des informations sur les produits ainsi que des encarts publicitaires.",
                        taskList: [
                            "Développement, tests unitaires et d'intégration",
                            "Conception technique détaillée",
                            "Administration des plates-formes de développement et d'intégration"
                        ],
                        technologies: [
                            "eZPublish 4.3 (+ extensions)",
                            "eZCComponents",
                            "MySQL5",
                            "PHP5",
                            "jQuery 1.6",
                            "Linux",
                            "xHTML 1.0",
                            "CSS",
                            "JavaScript 1.1",
                            "Subversion",
                            "Apache"

                        ]
                    },
                    {
                        logo: "/img/pc.jpg",
                        jobTitle: "Ingénieur NTI",
                        projectName: "Pleinchamp.com",
                        borderColor: "#5da423",
                        client: "Crédit Agricole",
                        dateBegin: "Juillet 2010",
                        dateEnd: "Août 2011",
                        description: "Refonte du portail extranet de Pleinchamp.com, filiale du Crédit agricole.",
                        taskList: [
                            "Développement, tests unitaires et d'intégration",
                            "Conception technique détaillée",
                            "Réalisation de courbes en Flex",
                            "Administration des plates-formes de développement et d'intégration"
                        ],
                        technologies: [
                            "eZPublish 4.3 (+ extensions)",
                            "eZCComponents",
                            "MySQL5",
                            "PHP5",
                            "jQuery 1.7",
                            "ActionScript 3.5",
                            "Flex 4",
                            "Linux",
                            "xHTML 1.0",
                            "CSS",
                            "JavaScript 1.1",
                            "Subversion",
                            "Apache"
                        ]
                    },
                    {
                        logo: "/img/rc.jpg",
                        jobTitle: "Ingénieur NTI",
                        projectName: "Platform",
                        borderColor: "#c60f13",
                        client: "Royal Canin",
                        dateBegin: "Avril 2010",
                        dateEnd: "Juillet 2010",
                        description: "Réalisation d’une usine à sites à destination des filiales de Royal Canin (Groupe Mars).",
                        taskList: [
                            "Développement, tests unitaires et d'intégration",
                            "Mise en place d'un moteur de recherche en Flex ( Product Finder )",
                            "Mise en place de web-services ( SOAP et REST )"
                        ],
                        technologies: [
                            "eZPublish 4.3 (+ extensions)",
                            "eZCComponents",
                            "MySQL5",
                            "PHP5",
                            "jQuery 1.7",
                            "ActionScript 3.5",
                            "Flex 4",
                            "Linux",
                            "xHTML 1.0",
                            "CSS",
                            "JavaScript 1.1",
                            "Subversion",
                            "Apache"
                        ]
                    }
                ]
            },
            {
                entrepriseName: "KeepCore",
                logo: "/img/kc.jpg",
                dateBegin: "Avril 2008",
                dateEnd: "Juillet 2008",
                projects: [
                    {
                        logo: "/img/kc.jpg",
                        jobTitle: "Développeur Stagiaire",
                        borderColor: "#9e0c0f",
                        projectName: "KeePlace",
                        client: "KeepCore",
                        dateBegin: "Avril 2008",
                        dateEnd: "Juillet 2008",
                        description: "Participation aux évolutions d'une plateforme collaborative en Flex",
                        taskList: [
                            "Travaux autour de la sécurité en Flex",
                            "Import / Export de données applicatives sous format Excel"
                        ],
                        technologies: [
                            "Adobe Flex",
                            "ActionScript 3",
                            "Apache",
                            "Java",
                            "Apache POI",
                        ],
                        specialContent: ""

                    }
                ]
            }

        ];


    }
);