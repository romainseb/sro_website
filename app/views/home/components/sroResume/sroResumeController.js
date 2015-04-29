angular.module('website').controller('SroResumeController',
    function ($sce, SroResumeService) {

        this.selectedProjects = [];

        this.validHtml = function validHtml(value) {
            return $sce.trustAsHtml(value);
        };

        this.isProjectSelected = function isProjectSelected(projectName) {
            var bool = false;

            for (var i = 0; i < this.selectedProjects.length; i++) {
                if (this.selectedProjects[i] === projectName) {
                    bool = true;
                }
            }

            return bool;
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

            if (!this.isProjectSelected(projectName)) {
                this.selectedProjects.push(projectName);
            }
            else {
                for (var i = 0; i < this.selectedProjects.length; i++) {
                    if (this.selectedProjects[i] === projectName) {
                        this.selectedProjects.splice(i, 1);
                    }
                }
            }
        };

        this.getProjectBottomBorder = function getProjectBottomBorder(project) {

            var obj = {};
            obj.borderBottomStyle = "solid";
            obj.borderBottomWidth = "1px";

            if (this.isProjectSelected(project.projectName)) {
                obj.borderBottomColor = project.borderColor;
            }
            else {
                obj.borderBottomColor = "transparent";
            }

            return obj;
        };

        this.jobs = SroResumeService.getJobs();

    }
);