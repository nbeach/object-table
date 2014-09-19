(function(){

    function KeywordParserService() {

        this.parse = function(keyword) {
            var parts = { column: null, operator: null, keyword: null};

            //If the keyword specifies a column (format [column]:[keyword]
            var keywordParts = keyword.split(':');
            if (keywordParts.length == 2) {
                parts.column = keywordParts[0].toLowerCase();

                //If there isn't a keyword after the column name then return null
                if (keywordParts[1] === undefined) return null;

                keyword = keywordParts[1];
            }

            //Separate the keyword from the operator (if an operator exists)
            if (keyword.substring(0, 2) == '>=' || keyword.substring(0, 2) == '<=') {
                parts.operator = keyword.substring(0, 2);
                keyword = keyword.substring(2);

            } else if (keyword.charAt(0) == '=' || keyword.charAt(0) == '<' || keyword.charAt(0) == '>') {
                parts.operator = keyword.charAt(0);
                keyword = keyword.substring(1);
            }

            keyword = keyword.trim();
            if (keyword.length > 0) parts.keyword = keyword;

            return parts;
        }

    }

    angular
        .module('ngResourceTable')
        .factory("KeywordParserService", function() {
            return new KeywordParserService();
        });

}());