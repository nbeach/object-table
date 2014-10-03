describe('objectTablePagination', function() {
    var scope, ctrl;

    beforeEach(module('objectTable'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        scope.data = [{
            string: 'zero'
        },{
            string: 'one'
        },{
            string: 'two'
        },{
            string: 'three'
        },{
            string: 'four'
        },{
            string: 'five'
        },{
            string: 'six'
        },{
            string: 'seven'
        },{
            string: 'eight'
        },{
            string: 'nine'
        }];


        scope.page = [];
        scope.config = [];
        scope.config.rowsPerPage = 3;

        ctrl = $controller('objectTablePaginationCtrl', { $scope : scope });

    }));

    it('sets the first page', function () {
        ctrl.setPage(1);
        expect(scope.page[0].string).toBe('zero');
        expect(scope.page[2].string).toBe('two');
        expect(scope.page.length).toBe(3);
    });

    it('sets the last page', function () {
        ctrl.setPage(4);
        expect(scope.page[0].string).toBe('nine');
        expect(scope.page.length).toBe(1);
    });

    it('sets a page that isnt the first or last', function () {
        ctrl.setPage(3);
        expect(scope.page[0].string).toBe('six');
        expect(scope.page[2].string).toBe('eight');
        expect(scope.page.length).toBe(3);
    });

    it('reports the page count', function () {
        expect( ctrl.getPageCount()).toBe(4);
    });

    it('reports the current page number', function () {
        ctrl.currentPage = 2;
        expect( ctrl.getCurrentPage()).toBe(2);
    });

    it('reports the current page to be zero when there is no data', function () {
        scope.data = [];
        expect( ctrl.getCurrentPage()).toBe(0);
    });

    it('identifies if the current page is the first', function () {
        ctrl.currentPage = 1;
        expect( ctrl.currentPageIsFirst()).toBe(true);
        ctrl.currentPage = 2;
        expect( ctrl.currentPageIsFirst()).toBe(false);
    });

    it('identifies if the current page is the last', function () {
        ctrl.currentPage = 4;
        expect( ctrl.currentPageIsLast()).toBe(true);
        ctrl.currentPage = 2;
        expect( ctrl.currentPageIsLast()).toBe(false);
    });


    it('identifies if the current page is the frist and last if there is only one page', function () {
        scope.data =  [{ string: 'zero' }];
        ctrl.currentPage = 1;
        expect( ctrl.currentPageIsLast()).toBe(true);
        expect( ctrl.currentPageIsLast()).toBe(true);
    });

    it('identifies if the current page is the first and last if there is no date', function () {
        scope.data =  [];
        expect( ctrl.currentPageIsLast()).toBe(true);
        expect( ctrl.currentPageIsLast()).toBe(true);
    });

    it('identifies index range of the current page', function () {
        expect(ctrl.getPageStartIndex(1)).toBe(0);
        expect(ctrl.getPageEndIndex(1)).toBe(3);

        expect(ctrl.getPageStartIndex(2)).toBe(3);
        expect(ctrl.getPageEndIndex(2)).toBe(6);
    });

    it('keeps the current page when the data has changed but the current page number is still valid', function () {
        ctrl.currentPage = 2;
        scope.data = [{
            string: 'zero'
        },{
            string: 'one'
        },{
            string: 'two'
        },{
            string: 'three'
        }];

        ctrl.dataChanged();

        expect(ctrl.currentPage).toBe(2);
    });

    it('resets the current page to 1 when the data has changed and the current page number is not valid', function () {
        ctrl.currentPage = 3;
        scope.data = [{
            string: 'zero'
        },{
            string: 'one'
        },{
            string: 'two'
        },{
            string: 'three'
        }];

        ctrl.dataChanged();

        expect(ctrl.currentPage).toBe(1);
    });

    it('resets the current page to 0 when the data changed to an empty set', function () {
        ctrl.currentPage = 3;
        scope.data = [];

        ctrl.dataChanged();

        expect(ctrl.currentPage).toBe(0);
    });

    it('sets the previous page', function () {
        ctrl.currentPage = 2
        ctrl.setPreviousPage();

        expect(ctrl.currentPage).toBe(1);
    });

    it('sets the next page', function () {
        ctrl.currentPage = 2
        ctrl.setNextPage();

        expect(ctrl.currentPage).toBe(3);
    });

    it('doesnt set the previous page when the page is already the first page', function () {
        ctrl.currentPage = 1
        ctrl.setPreviousPage();

        expect(ctrl.currentPage).toBe(1);
    });

    it('doesnt set the next page when the page is already the last page', function () {
        ctrl.currentPage = 4
        ctrl.setNextPage();

        expect(ctrl.currentPage).toBe(4);
    });

});