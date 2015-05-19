describe('Unit: SroContactController', function () {
    // Load the module with MainController
    beforeEach(module('website'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function ($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('SroContactController', {
            $scope: scope
        });
    }));

    it('should test the isDefined function',
        function () {
            expect(ctrl.isDefined(null)).toBeFalsy();
            expect(ctrl.isDefined(undefined)).toBeFalsy();
            expect(ctrl.isDefined(0)).toBeTruthy();
            expect(ctrl.isDefined("0")).toBeTruthy();
        }
    );

})