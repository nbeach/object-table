describe('objectTablePagination', function() {
    var scope, ctrl;

    beforeEach(module('objectTable'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        scope.columns = [{
            property: 'string',
            type: 'string'
        },{
            property: 'number',
            type: 'number'
        },{
            property: 'date',
            type: 'date'
        }];

        scope.data = [{
            string: 'andy',
            number: 10.5,
            date: '2014-12-31'
        },{
            string: 'jim',
            number: 5,
            date: '2005-06-15'
        },{
            string: 'zack',
            number: 1.75,
            date: '2010-01-01'
        }];

        scope.config = {};

        var SettingService = { getIfDefined: function(value, defaultValue) { return value(); } };

        ctrl = $controller('objectTableCtrl', { $scope : scope, SettingService: SettingService });

    }));


    it('should evaluate if checkboxes are enabled', function () {
        scope.config.checkboxes = {
            enabled: true
        };

        expect(ctrl.checkboxesEnabled()).toBe(true);

        scope.config.checkboxes = {
            enabled: false
        };

        expect(ctrl.checkboxesEnabled()).toBe(false);

    });


    it('should evaluate if the checkbox for a row is hidden', function () {

        //Hidden case
        var passedRow = null;
        scope.config.checkboxes = {
            hide: function(row) {
                passedRow = row;
                return true;
            }
        };

        var result = ctrl.isCheckboxHidden("row");
        expect(result).toBe(true);
        expect(passedRow).toBe("row");

        //Visible case
        scope.config.checkboxes = {
            hide: function(row) {
                passedRow = row;
                return false;
            }
        };

        result = ctrl.isCheckboxHidden("row");
        expect(result).toBe(false);
        expect(passedRow).toBe("row");

    });

    it('should evaluate if the checkbox for a row is disabled', function () {

        //Disabled case
        var passedRow = null;
        scope.config.checkboxes = {
            disable: function(row) {
                passedRow = row;
                return true;
            }
        };

        var result = ctrl.isCheckboxDisabled("row");
        expect(result).toBe(true);
        expect(passedRow).toBe("row");

        //Enabled case
        scope.config.checkboxes = {
            disable: function(row) {
                passedRow = row;
                return false;
            }
        };

        result = ctrl.isCheckboxDisabled("row");
        expect(result).toBe(false);
        expect(passedRow).toBe("row");

    });


    it('should call a function when a checkbox state changes', function () {

        //Checkbox checked
        var passedRow = '';
        var functionCalled = false;
        var event = { target: { checked: true } };
        scope.config.checkboxes = { checked: function(row) {
            functionCalled = true;
            passedRow = row;
        }};

        ctrl.checkboxChanged(event, 'row');
        expect(functionCalled).toBe(true);
        expect(passedRow).toBe('row');

        //Checkbox unchecked
        functionCalled = false;
        event = { target: { checked: false } };
        scope.config.checkboxes = { unchecked: function(row) {
            functionCalled = true;
            passedRow = row;
        }};

        ctrl.checkboxChanged(event, 'row');
        expect(functionCalled).toBe(true);
        expect(passedRow).toBe('row');
    });


    it('should evaluate if there are row buttons defined', function () {
        scope.config = {
            buttons: [1,2,3]
        };

        expect(ctrl.hasButtons()).toBe(true);

        scope.config = {
            buttons: []
        };

        expect(ctrl.hasButtons()).toBe(false);
    });


    it('should return the defined buttons', function () {
        scope.config = {
            buttons: [1,2,3]
        };

        var buttons = ctrl.getButtons();

        expect(buttons[0]).toBe(1);
        expect(buttons[1]).toBe(2);
        expect(buttons[2]).toBe(3);

    });


    it('should call a function when a button is clicked', function () {
        var passedRow = '';
        var functionCalled = false;
        var button = { click: function(row) {
            functionCalled = true;
            passedRow = row;
        }};

        ctrl.buttonClicked(button, 'row');
        expect(functionCalled).toBe(true);
        expect(passedRow).toBe('row');

    });


    it('should evaluate if a button for a row is disabled', function () {

        //Disabled case
        var passedRow = null;
        var button = { disable: function(row) {
            passedRow = row;
            return true;
        }};

        var result = ctrl.isButtonDisabled(button, "row");
        expect(result).toBe(true);
        expect(passedRow).toBe("row");

        //Enabled case
        button = { disable: function(row) {
            passedRow = row;
            return false;
        }};

        result = ctrl.isButtonDisabled(button, "row");
        expect(result).toBe(false);
        expect(passedRow).toBe("row");

    });


    it('should evaluate if a button for a row is hidden', function () {

        //Hidden case
        var passedRow = null;
        var button = { hide: function(row) {
            passedRow = row;
            return true;
        }};

        var result = ctrl.isButtonHidden(button, "row");
        expect(result).toBe(true);
        expect(passedRow).toBe("row");

        //Visible case
        button = { hide: function(row) {
            passedRow = row;
            return false;
        }};

        result = ctrl.isButtonHidden(button, "row");
        expect(result).toBe(false);
        expect(passedRow).toBe("row");

    });

});