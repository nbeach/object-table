describe('objectTableSorter', function() {
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
            return function(data, column, sortDescending){
                return { data: data, column: column, sortDescending: sortDescending };
            }
        }

        scope.sortedData
        scope.config = [];
        scope.config.sortColumn = scope.columns[0];
        scope.config.sortDescending = false;

        ctrl = $controller('objectTableSorterCtrl', { $scope : scope, $filter: filter });

    }));

    it('should correctly identify the sort order', function () {
        expect(ctrl.isSortOrder(scope.columns[0], false)).toBe(true);
        expect(ctrl.isSortOrder(scope.columns[0], true)).toBe(false);
        expect(ctrl.isSortOrder(scope.columns[1], false)).toBe(false);
    });

    it('should keep the sort order when told', function () {
        ctrl.sortKeepOrder();
        expect(scope.sortedData.sortDescending).toBe(false);
    });

    it('sorts by a new column when given', function () {
        ctrl.sortByColumn(scope.columns[1]);
        expect(scope.config.sortColumn.property).toBe(scope.columns[1].property);
    });

    it('reverses the sort order when the data is already sorted by a given column', function () {
        ctrl.sortByColumn(scope.columns[0]);
        expect(scope.sortedData.sortDescending).toBe(true);
    });

    it('sorts by the specified column and order', function () {
        ctrl.sort(scope.columns[2], true);
        expect(scope.config.sortColumn.property).toBe(scope.columns[2].property);
        expect(scope.sortedData.sortDescending).toBe(true);
    });

    it('sorts data by the same column and in the same order when the data changes', function () {

        scope.data = [{
            string: 'tim',
            number: 10.5,
            date: '2014-12-31'
        },{
            string: 'zack',
            number: 5,
            date: '2005-06-15'
        },{
            string: 'adam',
            number: 1.75,
            date: '2010-01-01'
        }];

        ctrl.dataChanged();

        expect(scope.sortedData.data[0].string).toBe("tim");
        expect(scope.config.sortColumn.property).toBe(scope.columns[0].property);
        expect(scope.sortedData.sortDescending).toBe(false);
    });

});