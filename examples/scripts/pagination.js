(function(){

    function PaginationExampleCtrl(exampleData) {

        //Initializing property to the current page's objects. This is then bound to the table directive
        this.dataPage = [];

        //Defining what object properties should be displayed and how
        this.columns = [{
            title: 'Index',
            property: 'index',
            type: 'number',
            filter: {name: 'number', param: 2}
        },{
            title: 'Name',
            property: 'name',
            type: 'string'
        },{
            title: 'Gender',
            property: 'gender',
            type: 'string'
        },{
            title: 'Company',
            property: 'company',
            type: 'string'
        },{
            title: 'Registered',
            property: 'registered',
            type: 'date',
            filter: {name:'date', param:'MM/dd/yyyy'}
        },{
            title: 'Latitude',
            property: 'latitude',
            type: 'number'
        },{
            title: 'Longitude',
            property: 'longitude',
            type: 'number',
            filter: {name: 'number', param: 3}
        }];

        //Setting the objects to be displayed
        this.data = exampleData;

        //Configuring pagination options
        this.paginationConfig = {
            rowsPerPage: 10
        };

        //Configuring table options
        this.tableConfig = {
            sortColumn: this.columns[1],
            sortDescending: false
        };

    }

    angular
        .module('paginationExampleApp', ['objectTable', 'ExampleData'])
        .controller('PaginationExampleCtrl', PaginationExampleCtrl);

}());