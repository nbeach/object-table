(function(){

    function objectTable($filter) {
        return {
            restrict: 'A',
            templateUrl: 'views/object-table.html',
            scope: {
                data: '=',
                columns: '='
            }
        };
    }

    angular
        .module('objectTable')
        .directive('objectTable', objectTable);

}());