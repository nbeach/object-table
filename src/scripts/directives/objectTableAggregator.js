function objectTableAggregatorCtrl($scope, $filter) {
    var self = this;


}

angular
    .module('objectTable')
    .controller('objectTableAggregatorCtrl', objectTableAggregatorCtrl)
    .directive('objectTableAggregator', function() {
        return {
            restrict: 'EA',
            templateUrl: 'views/object-table-aggregator.html',
            scope: {
                data: '=',
                columns: '='
            },
            controllerAs: 'ag',
            controller: 'objectTableAggregatorCtrl'
        };
    });