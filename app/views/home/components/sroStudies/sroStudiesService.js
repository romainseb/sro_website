angular.module('website').service('SroStudiesService',
    function () {

        this.studies = [
            {
                name: "Certification eZ Publish 4.3",
                date: "21 Décembre 2010",
                type: "certification",
                link: "http://auth.ez.no/certification/verify/383079"
            },
            {
                name: "Master IFPRU",
                subName: "Informatique à finalités professionnalisantes et recherche unifiée",
                location: "Université de Montpellier 2",
                date: "2008 - 2010",
                type: "study",
                link: "http://www.deptinfo.univ-montp2.fr/"
            },
            {
                name: "Licence professionnelle ACPI",
                subName: "Assistant Chef de Projet Informatique",
                location: "Université de Montpellier 2",
                date: "2007 - 2008",
                type: "study",
                link: "http://iutdepinfo.iutmontp.univ-montp2.fr/index.php/formations/licences-pro/acpi-genie-logiciel-blog"
            },
            {
                name: "DUT GL",
                subName: "Genie Logiciel",
                location: "IUT Vannes",
                date: "2004 - 2007",
                type: "study",
                link: "http://www.iutvannes.fr/dut-informatique-morbihan-bretagne/"
            },
            {
                name: "Bac Scientifique",
                location: "Lycée Dame du Vœu - Hennebont",
                date: "2004",
                type: "study",
                link: "http://www.lyceeduvoeu.fr/"
            }
        ];


        this.getStudies = function () {
            return this.studies;
        };

    }
);