(function(){

    function objectTableFilter($filter) {
        return {
            restrict: 'EA',
            templateUrl: 'views/object-table-filter.html',
            scope: {
                data: '=',
                columns: '=',
                filteredData: '='
            },
            controllerAs: 'fil',
            controller:  function($scope) {
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

                $scope.$watch('data', function() {
                    self.keywordsChanged();
                });

            }
        };
    }

    angular
        .module('objectTable')
        .directive('objectTableFilter', objectTableFilter);

}());