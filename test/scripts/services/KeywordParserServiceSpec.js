describe('KeywordParserService', function() {
    var service;

    beforeEach(module('objectTable'));
    beforeEach(inject(function(KeywordParserService) {
        service = KeywordParserService;
    }));

    it('should parse an empty or whitespace string into null', function () {
        var result = service.parse(' ');
        expect(result).toBe(null);
    });

    it('should parse a string with just an operator to null', function () {
        var result = service.parse('>=');
        expect(result).toBe(null);
    });

    it('should return null if a column is specified but there is no keyword', function () {
        var result = service.parse('index:');
        expect(result).toBe(null);
    });

    it('should parse a keyword only and not initialize the column or operator', function () {
        var result = service.parse('pie');

        expect(result.keyword).toBe('pie');
        expect(result.column).toBe(null);
        expect(result.operator).toBe(null);
    });

    it('should parse just a keyword and column and not initialize the operator', function () {
        var result = service.parse('index:pie');

        expect(result.keyword).toBe('pie');
        expect(result.column).toBe('index');
        expect(result.operator).toBe(null);
    });

    it('should parse just a keyword and operator and not initialize the column', function () {
        var result = service.parse('=pie');

        expect(result.keyword).toBe('pie');
        expect(result.column).toBe(null);
        expect(result.operator).toBe('=');
    });

    it('should parse just a keyword and operator and not initialize the column', function () {
        var result = service.parse('=pie');

        expect(result.keyword).toBe('pie');
        expect(result.column).toBe(null);
        expect(result.operator).toBe('=');
    });

    it('should parse just a keyword, operator, and column', function () {
        var result = service.parse('type:<=pie');

        expect(result.keyword).toBe('pie');
        expect(result.column).toBe('type');
        expect(result.operator).toBe('<=');
    });

});