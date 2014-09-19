(function(){

    function ResourceKeywordFilter(ValueComparatorService, KeywordParserService) {
        return function(resources, columns, keywords) {

            // TODO: General cleanup and optimization

            var keywordsAndParams = [];
            var filteredResources = [];

            //First parse the keywords for column names and operators
            for(var curKeyword = 0; curKeyword < keywords.length; curKeyword++) {
                var parsedKeywordAndParams = KeywordParserService.parse(keywords[curKeyword]);

                if(parsedKeywordAndParams.keyword !== null ) {
                    keywordsAndParams.push(parsedKeywordAndParams);
                }
            }


            //Filter the resources by the keywords and their parameters
            for(var curResourceIndex = 0; curResourceIndex < resources.length; curResourceIndex++) {
                var foundKeywords = [];

                for(var curColumnIndex = 0; curColumnIndex < columns.length; curColumnIndex++) {

                    for(var curKeywordIndex = 0; curKeywordIndex < keywordsAndParams.length; curKeywordIndex++) {
                        var curKeywordsAndParams = keywordsAndParams[curKeywordIndex];
                        var curColumn = columns[curColumnIndex].title.toLowerCase().replace(' ', '');

                        //Skip this keyword if a column was specified and it is not equal to the current column
                        if(curKeywordsAndParams.column !== null && curKeywordsAndParams.column != curColumn) {
                            continue;
                        }

                        var curColumnType = columns[curColumnIndex].type;
                        var curColumnProperty = columns[curColumnIndex].property;
                        var curResource = resources[curResourceIndex];

                        var compareResult = ValueComparatorService.compare(
                            curColumnType,
                            curKeywordsAndParams.operator,
                            curResource[curColumnProperty],
                            curKeywordsAndParams.keyword
                        );

                        if(compareResult) foundKeywords[curKeywordIndex] = true;

                    }
                }

                var countFoundKeywords = 0;
                foundKeywords.forEach(function(){
                    countFoundKeywords++;
                });
                if(countFoundKeywords >= keywords.length) filteredResources.push(resources[curResourceIndex]);
            }

            return filteredResources;

        };
    }

    angular
        .module('ngResourceTable')
        .filter("ResourceKeywordFilter", ResourceKeywordFilter);

}());
