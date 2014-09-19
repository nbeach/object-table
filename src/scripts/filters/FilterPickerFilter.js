(function(){

    function FilterPickerFilter($filter) {
        return function(value, filterName, filterParam) {

            if (filterName === undefined || filterName === null) {
                return value;
            } else {
                return $filter(filterName)(value, filterParam);
            }

        };
    }

    angular
        .module('ngResourceTable')
        .filter('FilterPickerFilter', FilterPickerFilter);

}());