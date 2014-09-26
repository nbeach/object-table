(function(){

    //TODO: Provide a mechanism to show messages when there is no data, or there are no matches for a keyword filter
    function objectTable($filter) {
        return {
            restrict: 'A',
            templateUrl: 'views/object-table.html',
            scope: {
                data: '=',
                columns: '='
            },
            controllerAs: 'tab',
            controller:  function($scope) {
                var self = this;


            }
        };
    }

    angular
        .module('objectTable')
        .directive('objectTable', objectTable);

}());