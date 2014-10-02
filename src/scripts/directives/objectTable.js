(function(){

    //TODO: Add checkbox, and button functionality
    angular
        .module('objectTable')
        .directive('objectTable', function($filter) {
            return {
                restrict: 'A',
                templateUrl: 'views/object-table.html',
                scope: {
                    data: '=',
                    columns: '='
                }
            };
        });

}());