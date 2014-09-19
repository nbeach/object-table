(function(){

    function ngResourceTable($filter) {
        return {
            restrict: 'EA',
            templateUrl: 'views/ng-resource-table.html',
            scope: {
                data:'=',
                columns:'=',
                config:'='
            },
            link:  function($scope) {
                $scope.keywords = "";
                $scope.currentPage = 1;

                //Initializing values from config object
                $scope.filteredData = $scope.data;
                $scope.sortColumn = ($scope.config.defaultSortColumn !== undefined) ? $scope.columns[$scope.config.defaultSortColumn] : $scope.columns[0];
                $scope.sortDescending = ($scope.config.defaultSortDescending !== undefined) ? $scope.config.defaultSortDescending : false;

                //Set to show all rows on page when pagination is disabled
                //TODO: Handle this case more elegantly
                if($scope.config.showPagination !== undefined && $scope.config.showPagination === false){
                    $scope.config.rowsPerPage = 9007199254740992;
                }

                $scope.paginationVisible = function()
                {
                    return ($scope.config.showPagination !== undefined) ? $scope.config.showPagination : true;
                };



                $scope.searchVisible = function()
                {
                    return ($scope.config.showSearch !== undefined) ? $scope.config.showSearch : true;
                };



                $scope.keywordsChanged = function()
                {
                    var keywords = $scope.keywords.split(' ');
                    $scope.currentPage = 1;

                    if(keywords.length > 0 && keywords[0].length > 0)
                        $scope.filteredData = $filter('ResourceKeywordFilter')($scope.data, $scope.columns, keywords);
                    else
                        $scope.filteredData = $scope.data;

                    $scope.sortKeepOrder();
                };



                $scope.noSearchResults = function()
                {
                    return $scope.data.length > 0 && $scope.filteredData.length == 0;
                };



                $scope.isSortOrder = function(column, sortDescending)
                {
                    return $scope.sortColumn !== null
                        && $scope.sortColumn.property == column.property
                        && $scope.sortDescending == sortDescending;
                };



                $scope.sortKeepOrder = function()
                {
                    $scope.sort($scope.sortColumn, $scope.sortDescending);
                };



                $scope.sortByColumn = function(column)
                {
                    //If already sorting by this column then reverse the order
                    if($scope.isSortOrder(column, $scope.sortDescending))
                    {
                        $scope.sort(column, !$scope.sortDescending);
                    }
                    //Else sort by the column ascending
                    else
                    {
                        $scope.sort(column, false);
                    }
                };



                $scope.sort = function(column, sortDescending)
                {
                    $scope.sortColumn = column;
                    $scope.sortDescending = sortDescending;
                    $scope.filteredData = $filter('ResourceSorterFilter')($scope.filteredData, column, sortDescending);
                };



                $scope.getCurrentPage = function()
                {
                    if($scope.getPageCount() == 0) return 0;
                    else return $scope.currentPage;
                };



                $scope.getPageCount = function()
                {
                    return Math.ceil($scope.filteredData.length / $scope.config.rowsPerPage);
                };



                $scope.currentPageIsLast = function()
                {
                    return $scope.currentPage >= $scope.getPageCount();
                };



                $scope.currentPageIsFirst = function()
                {
                    return $scope.currentPage == 1;
                };



                $scope.setPreviousPage = function() {
                    if ($scope.currentPage > 0) {
                        $scope.currentPage--;
                    }
                };



                $scope.setNextPage = function() {
                    if ($scope.currentPage < $scope.getPageCount()) {
                        $scope.currentPage++;
                    }
                };



                $scope.range = function(end, start) {
                    var sequence = [];

                    //If no start was provided assume 0
                    if (!start) {
                        start = 0;
                    }

                    //Create the sequence of values
                    for (var i = start; i < end; i++) {
                        sequence.push(i);
                    }

                    return sequence;
                };



                //Returns an array of the indexes of the resources array that the current page should display
                $scope.getCurrentPageIndexRange = function() {
                    var pageStartOffset = ($scope.currentPage * $scope.config.rowsPerPage) - $scope.config.rowsPerPage;
                    var pageEndOffset = ($scope.currentPage * $scope.config.rowsPerPage);

                    //In case the current page is the last page, and it isn't a full page,
                    //set the page end offset so it isn't beyond the accounts array length
                    if(pageEndOffset > $scope.filteredData.length-1) pageEndOffset = $scope.filteredData.length;

                    return $scope.range(pageEndOffset, pageStartOffset);
                };



                //Do initial sorting of elements on load
                $scope.sort($scope.sortColumn, $scope.sortDescending);

            }
        };
    }

    angular
        .module('ngResourceTable')
        .directive('ngResourceTable', ngResourceTable);

}());