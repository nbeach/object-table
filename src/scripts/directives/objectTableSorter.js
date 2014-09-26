(function(){

    //TODO: Provide a mechanism to show messages when there is no data, or there are no matches for a keyword filter
    function objectTableSorter($filter) {
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
            controller:  function($scope) {
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

                self.sort = function(column, sortDescending) {
                    $scope.config.sortColumn = column;
                    $scope.config.sortDescending = sortDescending;
                    $scope.sortedData = $filter('ObjectSorterFilter')($scope.data, column, sortDescending);
                };


                $scope.$watch('data', function() {
                    self.sort($scope.config.sortColumn, $scope.config.sortDescending);
                });

            }
        };
    }

    angular
        .module('objectTable')
        .directive('objectTableSorter', objectTableSorter);

}());