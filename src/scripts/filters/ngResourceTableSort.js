angular.module('ngResourceTableSort', [])
    .filter('ngResourceTableSort', function() {
        return function(resources, column, sortDescending) {

            //Defining the sort functions for supported data types
            var sortFunctions = [];

            sortFunctions['string'] = function(a,b) {
                if(a[column.property] < b[column.property]) return -1;
                else if(a[column.property] == b[column.property]) return 0;
                else if(a[column.property] > b[column.property]) return 1;
            };

            sortFunctions['number'] = function(a,b) {
                return a[column.property] - b[column.property];
            };

            sortFunctions['date'] = function(a,b) {
                //TODO: Implement date sorting
                return a[column.property] < b[column.property];
            };

            //Sorting
            resources.sort(sortFunctions[column.type]);
            if(sortDescending) resources.reverse();

            return resources;

        };
    });


