function KeywordParserService() {

    this.parse = function(keyword) {
        var parts = { column: null, operator: null, keyword: null};

        //First we see if the keyword specifies a column name (format [column]:[keyword]
        var keywordParts = keyword.split(':');
        if (keywordParts.length == 2) {
            parts.column = keywordParts[0].toLowerCase();

            //If there isn't a keyword after the column name then return null
            if (keywordParts[1] === undefined) return null;

            //Update the keyword with the text after the column name
            keyword = keywordParts[1];
        }


        //Next we find if the keyword specifies and operator (format [operator][keyword])
        if (keyword.substring(0, 2) == '>=' ||
            keyword.substring(0, 2) == '<=') {

            parts.operator = keyword.substring(0, 2);
            keyword = keyword.substring(2);

        } else if (keyword.charAt(0) == '=' ||
                   keyword.charAt(0) == '<' ||
                   keyword.charAt(0) == '>') {

            parts.operator = keyword.charAt(0);

            //Update the keyword with the text after the operator
            keyword = keyword.substring(1);
        }


        //Assure that the keyword isn't just whitespace
        keyword = keyword.trim();
        if (keyword.length > 0) {
            parts.keyword = keyword;
        } else {
            return null; //Return null if the trimmed keyword is zero length
        }

        return parts;
    };

}

angular
    .module('objectTable')
    .factory("KeywordParserService", function() {
        return new KeywordParserService();
    });