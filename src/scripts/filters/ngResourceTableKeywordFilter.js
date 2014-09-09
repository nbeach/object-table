angular.module('ngResourceTableKeywordFilter', [])
    .filter("ngResourceTableKeywordFilter", function() {
        return function(resources, columns, keywords) {

            //Defining the comparison function for all column types
            var compareFunctions = [];
            compareFunctions['string'] = function(property, keyword) {
                if(keyword.charAt(0) == '=') return property.toLowerCase() == keyword.substring(1).toLowerCase();
                else return property.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            };

            compareFunctions['number'] = function(property, keyword) {

                if(!isNaN(parseFloat(keyword)))
                {
                    return property == parseFloat(keyword);
                }
                else if(keyword.charAt(0) == '<' && !isNaN(parseFloat(keyword.substring(1))))
                {
                    return property < parseFloat(keyword.substring(1));
                }
                else if(keyword.charAt(0) == '>' && !isNaN(parseFloat(keyword.substring(1))))
                {
                    return property > parseFloat(keyword.substring(1));
                }
                else if(keyword.substring(0,2) == '>=' && !isNaN(parseFloat(keyword.substring(2))))
                {
                    return property >= parseFloat(keyword.substring(2));
                }
                else if(keyword.substring(0,2) == '<=' && !isNaN(parseFloat(keyword.substring(2))))
                {
                    return property <= parseFloat(keyword.substring(2));
                }
                else return false;
            };

            compareFunctions['date'] = function(property, keyword) {
                // TODO: Implement date searching
                return false;
            };

            //Filter the resources by the keywords
            var filteredResources = [];

            for(var curResource = 0; curResource < resources.length; curResource++) {
                var foundKeywords = [];

                for(var curColumn = 0; curColumn < columns.length; curColumn++) {
                    for(var curKeyword = 0; curKeyword < keywords.length; curKeyword++) {
                        var keyword = keywords[curKeyword];
                        var keywordParts = keyword.split(':');

                        //If the keyword specifies a column
                        if(keywordParts.length == 2 && keywordParts[1] !== undefined) {
                            //If the specified column is the current column then extract the keyword
                            if(keywordParts[0].toLowerCase() == columns[curColumn].title.toLowerCase().replace(' ', '')) {
                                keyword = keywordParts[1];
                            }
                            //Else skip this keyword
                            else continue;
                        }

                        if(compareFunctions[columns[curColumn].type](resources[curResource][columns[curColumn].property], keyword)) {
                            foundKeywords[curKeyword] = true;
                        }
                    }
                }

                var countFoundKeywords = 0;
                foundKeywords.forEach(function(){
                    countFoundKeywords++;
                });
                if(countFoundKeywords >= keywords.length) filteredResources.push(resources[curResource]);
            }

            return filteredResources;
        }
    });
