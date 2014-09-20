(function(){

    function ObjectFilterFilter(ValueComparatorService, KeywordParserService) {
        return function(objects, columns, keywords) {

            var conditions = [];
            var filteredObjects = [];

            //First parse the keywords into conditions (keywords may contain operators and column names)
            for(var i = 0; i < keywords.length; i++) {
                var condition = KeywordParserService.parse(keywords[i]);

                if(condition !== null ) {
                    conditions.push(condition);
                }
            }

            //Filter the objects by the conditions
            objects.forEach(function(object) {
                var conditionMatches = 0; //Number of condition comparisons that match the current object

                columns.forEach(function(column) {
                    conditions.forEach(function(condition) {
                        var formattedObjectColumn = column.title.toLowerCase().replace(' ', '');

                        //Skip this condition if it specifies a column and it isn't the current column
                        if(condition.column !== null && condition.column !== formattedObjectColumn) return;

                        //Compare object property to the keyword based on the operator (if supplied)
                        if(ValueComparatorService.compare(column.type, condition.operator, object[column.property], condition.keyword)) {
                            conditionMatches++;
                        }
                    });
                });

                //If the conditions matches is equal to the number of conditions than the object is a match!
                if(conditionMatches >= conditions.length) filteredObjects.push(object);

            });

            return filteredObjects;

        };
    }

    angular
        .module('objectTable')
        .filter("ObjectFilterFilter", ObjectFilterFilter);

}());
