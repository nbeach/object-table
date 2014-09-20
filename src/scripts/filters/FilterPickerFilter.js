(function(){

    function FilterPickerFilter($filter) {
        return function(value, filterName, filterParam) {

            //The filter may not have been set in the config
            if (filterName === undefined || filterName === null) {
                return value;
            } else {
                return $filter(filterName)(value, filterParam);
            }

        };
    }

    angular
        .module('objectTable')
        .filter('FilterPickerFilter', FilterPickerFilter);

}());