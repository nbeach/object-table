(function() {

    function ValueComparatorService() {
        var self = this;

        this.compareValues = function (operator, value, keyword) {
            switch (operator) {
                case  '=':
                    return value === keyword;
                case  '<':
                    return value < keyword;
                case  '>':
                    return value > keyword;
                case '>=':
                    return value >= keyword;
                case '<=':
                    return value <= keyword;
                default  :
                    return undefined;
            }
        };

        //Defining the comparison functions for all column types
        this.compareFunction = [];

        this.compareFunction['string'] = function (operator, value, keyword) {

            var lowerCaseValue = value.toLowerCase();
            var lowerCaseKeyword = keyword.toLowerCase();

            if (operator !== null) {
                return self.compareValues(operator, lowerCaseValue, lowerCaseKeyword);
            } else {
                return lowerCaseValue.indexOf(lowerCaseKeyword) > -1;
            }
        };

        this.compareFunction['number'] = function (operator, value, keyword) {

            //Stop if the keyword is zero length or just whitespace. Number() would evaluate these to 0
            if (keyword.trim().length === 0) return false;

            //Default operator
            if (operator === null) operator = '=';

            var parsedNumber = Number(keyword);

            if (!isNaN(parsedNumber)) return self.compareValues(operator, value, parsedNumber);
            else return false;

        };

        this.compareFunction['date'] = function (operator, value, keyword) {
            //Default operator
            if (operator === null) operator = '=';

            //TODO: Support for more date formats
            if (keyword.split('-').length === 3) {
                return self.compareValues(operator, value, keyword);

            } else if (keyword.split('/').length === 3) {
                var dateParts = keyword.split('/');
                var compareDate = dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
                return self.compareValues(operator, value, compareDate);
            }

            return false;
        };

        this.compare = function (type, operator, value, keyword) {
            return this.compareFunction[type](operator, value, keyword);
        }

    }

    angular
        .module('ngResourceTable')
        .factory("ValueComparatorService", function () {
            return new ValueComparatorService();
        });

}());