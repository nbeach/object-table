angular.module('ngResourceTableFilterPicker', [])
    .filter('ngResourceTableFilterPicker', ['$filter', function($filter) {
        return function(value, filterName, filterParam) {

            if(filterName === undefined || filterName === null) {
                return value;
            } else {
                return $filter(filterName)(value, filterParam);
            }
        };
    }]);
