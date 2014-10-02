describe('objectTableFilter', function() {
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

        //Mock object sorter filter
        var filter = function() {
            return function(data, columns, keywords){
                return { data: data, columns: columns, keywords: keywords };
            }
        }

        scope.keywords = '';
        scope.filteredData = [];
        ctrl = $controller('objectTableFilterCtrl', { $scope : scope, $filter: filter });

    }));


    it('should should just return the unmodified array if there are no keywords', function () {
        scope.keywords = '';
        ctrl.keywordsChanged();
        expect(scope.filteredData[0].string).toBe('andy');

    });

    it('should call the filter if the there are keywords', function () {
        scope.keywords = 'pie';
        ctrl.keywordsChanged();
        expect(scope.filteredData.keywords[0]).toBe('pie');
        expect(scope.filteredData.data[0].string).toBe('andy');
        expect(scope.filteredData.columns[0].property).toBe('string');
    });

});