(function(){

    function ExampleCtrl(exampleData) {

        //Initializing directive output variables
        this.dataFiltered = [];
        this.dataSorted = [];
        this.dataPage = [];

        //Defining what object properties should be displayed by the table and how
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

        //Configuring sorter options
        this.sorterConfig = {
            sortColumn: this.columns[1],
            sortDescending: false
        };

    }

    angular
        .module('ExampleApp', ['objectTable', 'ExampleData'])
        .controller('ExampleCtrl', ExampleCtrl);

}());