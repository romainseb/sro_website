angular.module('website').controller('SroSkillsController',
    function () {

        this.skillCategories = [
            {
                categoryName: "Front End",
                color: "#2980b9",
                technologies: [
                    {
                        name: "AngularJS",
                        percent: "90"
                    },
                    {
                        name: "jQuery",
                        percent: "85"
                    },
                    {
                        name: "Javascript",
                        percent: "90"
                    },
                    {
                        name: "HTML5",
                        percent: "85"
                    },
                    {
                        name: "CSS3",
                        percent: "80"
                    },
                    {
                        name: "Apache Flex",
                        percent: "60"
                    }
                ]
            },
            {
                categoryName: "Back End",
                color: "#34495e",
                technologies: [
                    {
                        name: "Java",
                        percent: "80"
                    },
                    {
                        name: "PHP",
                        percent: "70"
                    },
                    {
                        name: "NodeJS",
                        percent: "70"
                    }
                ]
            },
            {
                categoryName: "Frameworks & outils",
                color: "#e67e22",
                technologies: [
                    {
                        name: "Spring",
                        percent: "60"
                    },
                    {
                        name: "Hibernate",
                        percent: "60"
                    },
                    {
                        name: "Express",
                        percent: "60"
                    },
                    {
                        name: "Symfony",
                        percent: "50"
                    },
                    {
                        name: "eZ Publish",
                        percent: "70"
                    },
                    {
                        name: "Sails.js",
                        percent: "50"
                    }
                ]
            },
            {
                categoryName: "Bases de données",
                color: "#16a085",
                technologies: [
                    {
                        name: "MongoDB",
                        percent: "60"
                    },
                    {
                        name: "MySQL / MariaDB",
                        percent: "70"
                    },
                    {
                        name: "Oracle",
                        percent: "40"
                    }
                ]
            },
            {
                categoryName: "Outils",
                color: "#c0392b",
                technologies: [
                    {
                        name: "NPM",
                        percent: "70"
                    },
                    {
                        name: "Grunt",
                        percent: "70"
                    },
                    {
                        name: "Gulp",
                        percent: "70"
                    },
                    {
                        name: "Bower",
                        percent: "60"
                    }
                ]
            }

        ];


    }
)
;