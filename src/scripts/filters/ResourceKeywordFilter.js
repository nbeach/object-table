(function(){

    function ResourceKeywordFilter(ValueComparatorService, KeywordParserService) {
        return function(resources, columns, keywords) {

            var conditions = [];
            var filteredResources = [];

            //First parse the keywords into conditions (keywords may contain operators and column names)
            for(var i = 0; i < keywords.length; i++) {
                var condition = KeywordParserService.parse(keywords[i]);

                if(condition.keyword !== null ) {
                    conditions.push(condition);
                }
            }

            //Filter the resources by the conditions
            resources.forEach(function(resource) {
                var conditionMatches = 0; //Number of condition comparisons that match the current resource

                columns.forEach(function(column) {
                    conditions.forEach(function(condition) {
                        var formattedResourceColumn = column.title.toLowerCase().replace(' ', '');

                        //Skip this condition if it specifies a column and it isn't the current column
                        if(condition.column !== null && condition.column !== formattedResourceColumn) return;

                        //Compare resource property to the keyword based on the operator (if supplied)
                        if(ValueComparatorService.compare(column.type, condition.operator, resource[column.property], condition.keyword)) {
                            conditionMatches++;
                        }
                    });
                });

                //If the conditions matches is equal to the number of conditions than the resource is a match!
                if(conditionMatches >= conditions.length) filteredResources.push(resource);

            });

            return filteredResources;

        };
    }

    angular
        .module('ngResourceTable')
        .filter("ResourceKeywordFilter", ResourceKeywordFilter);

}());
