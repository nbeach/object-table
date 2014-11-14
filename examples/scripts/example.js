function ExampleCtrl($sce, exampleData) {

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
        sortable: false,
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


    //Configuring table options
    this.tableConfig = {
        checkboxes: {
          enabled: true,
          hide: function(object) { return object.index > 5 && object.index < 10; },
          disable: function(object) { return false; },
          checked: function(object) { alert("Checked: " + object.index); },
          unchecked: function(object) { alert("Unchecked: " + object.index); }
        },
        buttons: [
            {
                titleHtml: $sce.trustAsHtml('Edit'),
                click: function(object) { alert("Edit Click: " + object.index); },
                hide: function(object) { return object.index > 25; },
                disable: function(object) { return object.index < 10; }
            },
            {
                titleHtml: $sce.trustAsHtml('<span class="glyphicon glyphicon-remove"></span>'),
                click: function(object) { alert("Delete Click: " + object.index); },
                hide: function(object) { return object.index > 15; },
                disable: function(object) { return object.index < 5; }
            }
        ]
    };

    this.aggregatorConfig = {
        index: {
            type: 'SUM',
            filter: {name: 'number', param: 3}
        },

        latitude: {
            type: 'SUM',
            filter: {name: 'number', param: 3}
        }
    };


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