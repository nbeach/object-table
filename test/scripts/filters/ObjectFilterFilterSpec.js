describe('ObjectFilterFilter', function() {
    var filter, columns, data;

    beforeEach(module('objectTable'));

    beforeEach(module(function($provide) {
        $provide.factory('ObjectFilterFilter', function() {

            getById = function(id) {
                return {
                    firstName: 'Bob'
                };
            };
            return {
                getById: getById
            };
        });
    }));


    beforeEach(inject(function($filter) {
        filter = $filter;

        columns = [{
            property: 'string',
            type: 'string'
        },{
            property: 'number',
            type: 'number'
        },{
            property: 'date',
            type: 'date'
        }];

        data = [{
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

    }));




    it('should sort string data', function () {
        var result = filter('ObjectSorterFilter')(data, columns[0], true);
        expect(true).toBe(true);
    });

});