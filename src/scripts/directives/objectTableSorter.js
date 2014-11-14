function objectTableSorterCtrl($scope, $filter) {
    var self = this;

    self.isSortOrder = function(column, sortDescending) {
        return $scope.config.sortColumn !== null
            && $scope.config.sortColumn.property == column.property
            && $scope.config.sortDescending == sortDescending;
    };

    self.sortKeepOrder = function() {
        self.sort($scope.config.sortColumn, $scope.config.sortDescending);
    };

    self.sortByColumn = function(column) {

        //If already sorting by this column then reverse the order
        if(self.isSortOrder(column, $scope.config.sortDescending)) {
            self.sort(column, !$scope.config.sortDescending);

        } else {  //Else sort by the column ascending
            self.sort(column, false);
        }

    };

    self.isColumnSortable = function(column) {
        //The column defaults to sortable if not specified
        return column.sortable === undefined
            || ( column.sortable !== undefined && column.sortable == true );
    };

    self.sort = function(column, sortDescending) {
        $scope.config.sortColumn = column;
        $scope.config.sortDescending = sortDescending;
        $scope.sortedData = $filter('ObjectSorterFilter')($scope.data, column, sortDescending);
    };

    self.dataChanged = function() {
        self.sort($scope.config.sortColumn, $scope.config.sortDescending);
    };



    $scope.$watch('data', self.dataChanged);

}

angular
    .module('objectTable')
    .controller('objectTableSorterCtrl', objectTableSorterCtrl)
    .directive('objectTableSorter',   function objectTableSorter() {
        return {
            restrict: 'A',
            templateUrl: 'views/object-table-sorter.html',
            scope: {
                config: '=',
                data: '=',
                sortedData: '=',
                columns: '='
            },
            controllerAs: 'sortCtrl',
            controller: 'objectTableSorterCtrl'
        };
    });