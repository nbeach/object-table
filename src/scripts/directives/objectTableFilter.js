(function(){

    //TODO: Add hover tooltip functionality to explain filtering capabilities
    function objectTableFilterCtrl($scope, $filter) {
        var self = this;

        $scope.keywords = "";

        self.keywordsChanged = function()
        {
            var keywords = $scope.keywords.split(' ');
            self.currentPage = 1;

            if(keywords.length > 0 && keywords[0].length > 0)
                $scope.filteredData = $filter('ObjectFilterFilter')($scope.data, $scope.columns, keywords);
            else
                $scope.filteredData = $scope.data;
        };

        self.dataChanged = function() {
            self.keywordsChanged();
        };

        $scope.$watch('data', self.dataChanged);

    }

    angular
        .module('objectTable')
        .controller('objectTableFilterCtrl', objectTableFilterCtrl)
        .directive('objectTableFilter', function() {
            return {
                restrict: 'EA',
                templateUrl: 'views/object-table-filter.html',
                scope: {
                    data: '=',
                    columns: '=',
                    filteredData: '='
                },
                controllerAs: 'fil',
                controller: 'objectTableFilterCtrl'
            };
        });

}());