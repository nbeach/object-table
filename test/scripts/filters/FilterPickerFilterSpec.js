describe('FilterPickerFilter', function() {
    var filter;

    beforeEach(module('objectTable'));
    beforeEach(inject(function($filter) {
        filter = $filter;
    }));


    it('should apply the passed filter to the data', function () {
        var result =  filter('FilterPickerFilter')('ABC', 'lowercase', null);
        expect(result).toBe('abc');
    });

    it('should apply the passed filter to the data using the parameter', function () {
        var result =  filter('FilterPickerFilter')(3.14159265359, 'number', 3);
        expect(result).toBe('3.142');
    });

});