describe('ValueComparatorService', function() {
    var service;

    beforeEach(module('objectTable'));
    beforeEach(inject(function(ValueComparatorService) {
        service = ValueComparatorService;
    }));


    it('should return undefined if comparison operator is invalid', function () {
        expect(service.compareValues('X', 1, 1)).toBe(undefined);
    });

    it('should correctly compare using the = operator', function () {
        expect(service.compareValues('=', 1, 0)).toBe(false);
        expect(service.compareValues('=', 1, 1)).toBe(true);
    });

    it('should correctly compare using the < operator', function () {
        expect(service.compareValues('<', 1, 0)).toBe(false);
        expect(service.compareValues('<', 0, 1)).toBe(true);
        expect(service.compareValues('<', 0, 0)).toBe(false);
    });

    it('should correctly compare using the > operator', function () {
        expect(service.compareValues('>', 1, 0)).toBe(true);
        expect(service.compareValues('>', 0, 1)).toBe(false);
        expect(service.compareValues('>', 0, 0)).toBe(false);
    });

    it('should correctly compare using the <= operator', function () {
        expect(service.compareValues('<=', 1, 0)).toBe(false);
        expect(service.compareValues('<=', 0, 1)).toBe(true);
        expect(service.compareValues('<=', 0, 0)).toBe(true);
    });

    it('should correctly compare using the >= operator', function () {
        expect(service.compareValues('>=', 1, 0)).toBe(true);
        expect(service.compareValues('>=', 0, 1)).toBe(false);
        expect(service.compareValues('>=', 0, 0)).toBe(true);
    });

    it('should ignore case for string comparisons', function () {
        expect(service.compareFunction['string']('=', 'Jack', 'jack')).toBe(true);
    });

    it('should do a full text search if null operator is provided for string comparisons', function () {
        expect(service.compareFunction['string'](null, 'jackey', 'jack')).toBe(true);
    });

    it('should return false for number comparisons where the keyword is an empty or whitespace string', function () {
        expect(service.compareFunction['number']('=', 10, ' ')).toBe(false);
    });

    it('should default to = when the operator is null for number comparisons', function () {
        expect(service.compareFunction['number'](null, 10, '10')).toBe(true);
    });

    it('should return false if the keyword is not a number for number comparisons', function () {
        expect(service.compareFunction['number']('=', 10, '10abc10')).toBe(false);
    });

    it('should return false if the keyword date is not in format mm/dd/yyyy or yyyy-mm-dd for date comparisons', function () {
        expect(service.compareFunction['date']('=', '2000-01-01', '01-02/02')).toBe(false);
    });

    it('should should convert mm/dd/yyyy to yyyy-mm-dd format for date comparisons', function () {
        expect(service.compareFunction['date']('=', '2000-02-01', '02/01/2000')).toBe(true);
    });

    it('should should compare values correctly when provided a data type', function () {
        expect(service.compare('number', '=', 10, '10')).toBe(true);
    });

});