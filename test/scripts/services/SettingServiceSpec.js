describe('SettingService', function() {
    var service;

    beforeEach(module('objectTable'));
    beforeEach(inject(function(SettingService) {
        service = SettingService;
    }));


    it('should return the value when it is defined', function () {
        var foo = {
            bar: {
                value: 'test string'
            }
        };

        var result = service.getIfDefined(function(){ return foo.bar.value; }, 'default');
        expect(result).toBe('test string');
    });


    it('should return the default value when the value is undefined', function () {
        var result = service.getIfDefined(function(){ return foo; }, 'default');
        expect(result).toBe('default');
    });


    it('should return the default value when the value is null', function () {
        var result = service.getIfDefined(function(){ return null; }, 'default');
        expect(result).toBe('default');
    });


    it('should return the default value when the value is the child of an undefined parent', function () {
        var foo = {};
        var result = service.getIfDefined(function(){ return foo.bar.value; }, 'default');
        expect(result).toBe('default');
    });

});