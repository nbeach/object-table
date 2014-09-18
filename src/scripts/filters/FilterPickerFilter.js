angular
    .module('ngResourceTable')
    .filter('FilterPickerFilter', function($filter) {

        return function FilterPickerFilter(value, filterName, filterParam) {

            if(filterName === undefined || filterName === null) {
                return value;
            } else {
                return $filter(filterName)(value, filterParam);
            }
        };

    });
