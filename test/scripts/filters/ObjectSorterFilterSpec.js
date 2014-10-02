describe('ObjectSorterFilter', function() {
    var filter, columns, data;

    beforeEach(module('objectTable'));
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
        expect(result[0].number).toBe(data[2].number);
        expect(result[1].number).toBe(data[1].number);
        expect(result[2].number).toBe(data[0].number);
    });

    it('should sort numeric data', function () {
        var result = filter('ObjectSorterFilter')(data, columns[1], false);
        expect(result[0].number).toBe(data[2].number);
        expect(result[1].number).toBe(data[1].number);
        expect(result[2].number).toBe(data[0].number);
    });

    it('should sort date data', function () {
        var result = filter('ObjectSorterFilter')(data, columns[2], false);
        expect(result[0].date).toBe(data[1].date);
        expect(result[1].date).toBe(data[2].date);
        expect(result[2].date).toBe(data[0].date);
    });

    it('should not change the order of the data when its already sorted', function () {
        var result = filter('ObjectSorterFilter')(data, columns[0], false);
        expect(result[0].string).toBe(data[0].string);
        expect(result[1].string).toBe(data[1].string);
        expect(result[2].string).toBe(data[2].string);
    });

    it('should reverse the order of the data', function () {
        var result = filter('ObjectSorterFilter')(data, columns[0], true);
        expect(result[0].string).toBe(data[2].string);
        expect(result[1].string).toBe(data[1].string);
        expect(result[2].string).toBe(data[0].string);
    });

});