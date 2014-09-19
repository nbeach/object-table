(function(){

    function ResourceSorterFilter() {
        return function (resources, column, sortDescending) {

            //Defining the sort functions for supported data types
            var sortFunctions = [];

            sortFunctions['string'] = function(a,b) {
                if(a[column.property] < b[column.property])      return -1;
                else if(a[column.property] > b[column.property]) return 1;
                else                                             return 0;
            };

            sortFunctions['number'] = function(a,b) {
                return a[column.property] - b[column.property];
            };

            sortFunctions['date'] = function(a,b) {
                if(a[column.property] < b[column.property])      return -1;
                else if(a[column.property] > b[column.property]) return 1;
                else                                             return 0;
            };

            //Sorting
            resources.sort(sortFunctions[column.type]);
            if(sortDescending) resources.reverse();

            return resources;

        };
    }

    angular
        .module('ngResourceTable')
        .filter('ResourceSorterFilter', ResourceSorterFilter);

}());
