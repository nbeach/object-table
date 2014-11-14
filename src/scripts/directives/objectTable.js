function objectTableCtrl($scope, SettingService) {
    var self = this;

    self.checkboxesEnabled = function() {
        var enabled = SettingService.getIfDefined(function(){ return $scope.config.checkboxes.enabled; }, false);
        return enabled;
    };

    self.isCheckboxHidden = function(row) {
        var hide = SettingService.getIfDefined(function(){ return $scope.config.checkboxes.hide; }, function() { return false; });
        return hide(row);
    };

    self.isCheckboxDisabled = function(row) {
        var disable = SettingService.getIfDefined(function(){ return $scope.config.checkboxes.disable; }, function() { return false; });
        return disable(row);
    };

    self.checkboxChanged = function($event, row) {
        var checkbox = $event.target;

        if(checkbox.checked) {
            var checked = SettingService.getIfDefined(function(){ return $scope.config.checkboxes.checked; }, function() { return; });
            checked(row);
        } else {
            var unchecked = SettingService.getIfDefined(function(){ return $scope.config.checkboxes.unchecked; }, function() { return; });
            unchecked(row);
        }
    };

    self.hasButtons = function() {
        var buttons = SettingService.getIfDefined(function(){ return $scope.config.buttons; }, []);
        return buttons.length > 0;
    };

    self.getButtons = function() {
        var buttons = SettingService.getIfDefined(function(){ return $scope.config.buttons; }, []);
        return buttons;
    };

    self.buttonClicked = function(button, row) {
        var click = SettingService.getIfDefined(function(){ return button.click; }, function() { return; });
        click(row);
    };

    self.isButtonDisabled = function(button, row) {
        var disable = SettingService.getIfDefined(function(){ return button.disable; }, function() { return false; });
        return disable(row);
    };

    self.isButtonHidden = function(button, row) {
        var hide = SettingService.getIfDefined(function(){ return button.hide; }, function() { return false; });
        return hide(row);
    };

}

angular
    .module('objectTable')
    .controller('objectTableCtrl', objectTableCtrl)
    .directive('objectTable', function () {
        return {
            restrict: 'A',
            templateUrl: 'views/object-table.html',
            scope: {
                data: '=',
                config: '=',
                columns: '='
            },
            controllerAs: 'tab',
            controller: 'objectTableCtrl'
        };
    });