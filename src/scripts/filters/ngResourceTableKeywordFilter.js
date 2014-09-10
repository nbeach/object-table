angular.module('ngResourceTableKeywordFilter', [])
    .filter("ngResourceTableKeywordFilter", function() {
        return function(resources, columns, keywords) {

            //Separates the column name and operator from the keyword (if they exist)
            function separateKeywordParameters(keyword) {
                var parts = { column: null, operator: null, keyword: null};

                //If the keyword specifies a column (format [column]:[keyword]
                var keywordParts = keyword.split(':');
                if(keywordParts.length == 2) {
                    parts.column = keywordParts[0].toLowerCase();

                    //If there isn't a keyword after the column name then return null
                    if(keywordParts[1] === undefined) return null;

                    keyword = keywordParts[1];
                }

                //Separate the keyword from the operator (if an operator exists)
                if(keyword.substring(0,2) == '>=' || keyword.substring(0,2) == '<=') {
                    parts.operator = keyword.substring(0, 2);
                    keyword = keyword.substring(2);

                } else if(keyword.charAt(0) == '=' || keyword.charAt(0) == '<' || keyword.charAt(0) == '>' ) {
                    parts.operator = keyword.charAt(0);
                    keyword = keyword.substring(1);
                }

                keyword = keyword.trim();
                if(keyword.length > 0 ) parts.keyword = keyword;

                return parts;
            }


            function compare(operator, value1, value2) {
                if      (operator === '=')  return value1 === value2;
                else if (operator === '<')  return value1 <   value2;
                else if (operator === '>')  return value1 >   value2;
                else if (operator === '>=') return value1 >=  value2;
                else if (operator === '<=') return value1 <=  value2;
                else                        return undefined;
            }


            //Defining the comparison function for all column types
            var compareFunctions = [];

            compareFunctions['string'] = function(operator, property, keyword) {

                var lowerCaseProperty = property.toLowerCase();
                var lowerCaseKeyword = keyword.toLowerCase();

                if(operator !== null) {
                    return compare(operator, lowerCaseProperty, lowerCaseKeyword);
                } else {
                    return lowerCaseProperty.indexOf(lowerCaseKeyword) > -1;
                }
            };

            compareFunctions['number'] = function(operator, property, keyword) {

                //Stop if the keyword is zero length or just whitespace Number() would evaluate this to 0
                if(keyword.trim().length === 0) return false;

                //Default operator
                if(operator === null) operator = '=';

                var parsedNumber = Number(keyword);

                if (!isNaN(parsedNumber)) return compare(operator, property, parsedNumber);
                else false;

            };

            compareFunctions['date'] = function(operator, property, keyword) {

                // TODO: Support for more date formats

                //Default operator
                if(operator === null) operator = '=';

                if (keyword.split('-') === 3) {
                    return compare(operator, property, keyword);

                } else if (keyword.split('/') === 3) {
                    var dateParts = keyword.split('/');
                    var compareKeyword = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
                    return  compare(operator, property, compareKeyword);
                }

                return false;
            };













            var keywordsAndParams = [];
            var filteredResources = [];

            //First parse the keywords for column names and operators
            for(var curKeyword = 0; curKeyword < keywords.length; curKeyword++) {
                var parsedKeywordAndParams = separateKeywordParameters(keywords[curKeyword]);

                if(parsedKeywordAndParams.keyword !== null ) {
                    keywordsAndParams.push(separateKeywordParameters(keywords[curKeyword]));
                }
            }



            //Filter the resources by the keywords and their parameters

            // TODO: Clean up loops and optimize
            for(var curResourceIndex = 0; curResourceIndex < resources.length; curResourceIndex++) {
                var foundKeywords = [];

                for(var curColumnIndex = 0; curColumnIndex < columns.length; curColumnIndex++) {
                    for(var curKeywordIndex = 0; curKeywordIndex < keywordsAndParams.length; curKeywordIndex++) {
                        var curKeywordsAndParams = keywordsAndParams[curKeywordIndex];

                        //Skip this keyword if a column was specified and it is not equal to the current column
                        if(curKeywordsAndParams.column !== null
                        && curKeywordsAndParams.column != columns[curColumnIndex].title.toLowerCase().replace(' ', ''))
                        {
                            continue;
                        }

                        var curColumnType = columns[curColumnIndex].type;
                        var curColumnProperty = columns[curColumnIndex].property;
                        var curResource = resources[curResourceIndex];

                        var compareResult = compareFunctions[curColumnType](
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
        }
    });
