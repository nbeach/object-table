(function(){

    function FilterExampleCtrl(exampleData) {

        //Setting the objects to be displayed
        this.data = exampleData;

        //Initializing property to store the filtered set of objects. This is then bound to the table directive
        this.dataFiltered = [];

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

    }

    angular
        .module('filterExampleApp', ['objectTable', 'ExampleData'])
        .controller('FilterExampleCtrl', FilterExampleCtrl);

}());