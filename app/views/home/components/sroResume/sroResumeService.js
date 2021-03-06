angular.module('website').service('SroResumeService',
    function () {

        this.jobs = [
            {
                entrepriseName: "Sopra Steria",
                entrepriseLink: "http://steriarecruitment.co.uk/",
                logo: "/img/sopra-steria.jpeg",
                dateBegin: "Octobre 2013",
                dateEnd: "maintenant",
                borderColor: "#cf6e0e",
                projects: [
                    {
                        logo: "/img/erdf.jpg",
                        borderColor: "#2285a2",
                        jobTitle: "Référent technique",
                        projectName: "Tamaris",
                        client: "ERDF",
                        dateBegin: "Octobre 2013",
                        dateEnd: "maintenant",
                        description: "Participation aux évolutions de l'outil permettant la planification d'activités et la traçabilité de l’ensemble des interventions des agents ERDF",
                        taskList: [
                            "Référent technique AngularJS",
                            "Référent technique au sein des versions de build",
                            "Développement, tests unitaires et d'intégration",
                            "Rédaction de conception détaillée"
                        ],
                        technologies: {
                            frontEnd: [
                                "AngularJS", "CSS3", "HTML5", "Grunt", "Adobe Air", "Apache Flex"
                            ],
                            backEnd: [
                                "Java J2EE", "Maven"
                            ],
                            env: [
                                "Weblogic", "Hibernate", "Spring"
                            ]
                        },
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
                entrepriseLink: "http://www.cgi.fr/",
                logo: "/img/cgi.jpg",
                dateBegin: "Avril 2010",
                dateEnd: "Septembre 2013",
                projects: [
                    {
                        logo: "/img/ca.jpg",
                        jobTitle: "Ingénieur NTI",
                        borderColor: "#188781",
                        projectName: "Nice V2",
                        client: "Crédit Agricole",
                        dateBegin: "Janvier 2012",
                        dateEnd: "Octobre 2013",
                        description: "Participation à la refonte du portail interne / externe du crédit agricole pour les collaborateurs et les clients. Mission sur site. Projet national.",
                        taskList: [
                            "Développement d'IHM et services",
                            "Conception détaillée",
                            "Chiffrage du projet ( Planning Poker, Chiffrage à dire d'expert, Abaques )",
                            "Réunions d'architecture"
                        ],
                        technologies: {
                            frontEnd: [
                                "Jquery", "CSS3", "HTML5"
                            ],
                            backEnd: [
                                "Architecture SOA", "Java", "Maven"
                            ],
                            env: [
                                "Centrasite", "Suite IBM", "WebSphere"
                            ]
                        },
                        images: []
                    },
                    {
                        logo: "/img/rc.jpg",
                        jobTitle: "Référent Technique",
                        borderColor: "#c60f13",
                        projectName: "E-Retailing",
                        client: "Royal Canin",
                        dateBegin: "Sept 2011",
                        dateEnd: "Déc 2011",
                        description: "Réalisation d'un site permettant aux revendeurs de produits Royal Canin de récupérer des informations sur les produits ainsi que des encarts publicitaires.",
                        taskList: [
                            "Développement, tests unitaires et d'intégration",
                            "Conception technique détaillée",
                            "Administration des plates-formes de développement et d'intégration"
                        ],

                        technologies: {
                            frontEnd: [
                                "jQuery 1.6", "xHTML 1.0", "CSS", "JavaScript 1.1"
                            ],
                            backEnd: [
                                "eZPublish 4.3 (+ extensions)", "eZCComponents", "MySQL5", "PHP5"
                            ],
                            env: [
                                "Linux", "Wamp", "Subversion", "Apache"
                            ]
                        },
                        images: [
                            "/img/ersc.jpg"
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

                        technologies: {
                            frontEnd: [
                                "jQuery 1.7", "xHTML 1.0", "CSS", "JavaScript 1.1", "ActionScript 3.5"
                            ],
                            backEnd: [
                                "eZPublish 4.3 (+ extensions)", "eZCComponents", "MySQL5", "PHP5"
                            ],
                            env: [
                                "Linux", "Wamp", "Subversion", "Apache"
                            ]
                        },
                        images: [
                            "/img/pleinchamp.jpg"
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
                        technologies: {
                            frontEnd: [
                                "jQuery 1.7", "xHTML 1.0", "CSS", "JavaScript 1.1", "ActionScript 3.5"
                            ],
                            backEnd: [
                                "eZPublish 4.3 (+ extensions)", "eZCComponents", "MySQL5", "PHP5"
                            ],
                            env: [
                                "Linux", "Wamp", "Subversion", "Apache"
                            ]
                        },
                        images: [
                            "/img/platform.jpg"
                        ]
                    }
                ]
            },
            {
                entrepriseName: "KeepCore",
                entrepriseLink: "http://www.keepcore.com/",
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
                        technologies: {
                            frontEnd: [
                                "Adobe Flex", "ActionScript 3"
                            ],
                            backEnd: [
                                "Java", "Apache POI"
                            ],
                            env: [
                                "Apache"
                            ]
                        },
                        specialContent: ""

                    }
                ]
            }
        ];

        this.getJobs = function getJobs() {
            return this.jobs;
        };


    }
);