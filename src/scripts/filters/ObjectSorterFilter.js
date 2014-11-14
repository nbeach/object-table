function ObjectSorterFilter() {
    return function (objects, column, sortDescending) {

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
        var sortedObjects = objects.slice(0); //Make a copy of the array
        sortedObjects.sort(sortFunctions[column.type]);
        if(sortDescending) sortedObjects.reverse();

        return sortedObjects;

    };
}

angular
    .module('objectTable')
    .filter('ObjectSorterFilter', ObjectSorterFilter);