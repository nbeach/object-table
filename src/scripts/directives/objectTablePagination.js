(function(){

    function objectTablePaginationCtrl($scope) {
        var self = this;

        self.currentPage = 1;

        self.getPageStartIndex = function(pageNum) {
            return (pageNum * $scope.config.rowsPerPage) - $scope.config.rowsPerPage;
        };

        self.getPageEndIndex = function(pageNum) {
            return (pageNum * $scope.config.rowsPerPage);
        };

        self.setPage = function(pageNum) {
            self.currentPage = pageNum;
            $scope.page = $scope.data.slice(self.getPageStartIndex(pageNum), self.getPageEndIndex(pageNum));
        };

        self.setPreviousPage = function() {
            if (self.currentPage > 1) {
                self.setPage(self.currentPage - 1);
            }
        };

        self.setNextPage = function() {
            if (self.currentPage < self.getPageCount()) {
                self.setPage(self.currentPage + 1);
            }
        };

        self.getCurrentPage = function() {
            if(self.getPageCount() == 0) return 0;
            else return self.currentPage;
        };

        self.getPageCount = function() {
            return Math.ceil($scope.data.length / $scope.config.rowsPerPage);
        };

        self.currentPageIsLast = function() {
            return self.currentPage >= self.getPageCount();
        };

        self.currentPageIsFirst = function() {
            return self.currentPage <= 1;
        };

        $scope.$watch('data', function() {

            //If the data has changed but the current page is still a valid page then re-paginate using it
            if(self.getPageCount() > 0 && self.currentPage !== 0 && self.currentPage <= self.getPageCount() ) {
                self.setPage(self.currentPage);
            } else if(self.getPageCount() > 0) { //Else if there are pages then set to page 1
                self.setPage(1);
            } else { //Else there is no data so set page 0
                self.setPage(0);
            }
        });

    }

    angular
        .module('objectTable')
        .controller('objectTablePaginationCtrl', objectTablePaginationCtrl)
        .directive('objectTablePagination', function() {
            return {
                restrict: 'EA',
                templateUrl: 'views/object-table-pagination.html',
                scope: {
                    data: '=',
                    config: '=',
                    page: '='
                },
                controllerAs: 'pag',
                controller: 'objectTablePaginationCtrl'
            };
        });

}());