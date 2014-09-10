angular.module('basicExampleApp', ['ngResourceTable'])
.controller('BasicExampleCtrl', [ '$scope',
    function($scope) {
        $scope.title = 'Transactions';


        $scope.resourceTableConfig = {
            showPagination: true,
            rowsPerPage: 15,
            showSearch: true,
            defaultSortColumn: 1,
            defaultSortDescending: false
        };

        $scope.columns = [{
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

        $scope.dataRows = [
            {
                "index": 0,
                "balance": "$3,250.53",
                "age": 40,
                "eyeColor": "green",
                "name": "Scott Alvarez",
                "gender": "male",
                "company": "NSPIRE",
                "email": "scottalvarez@nspire.com",
                "phone": "+1 (928) 444-3378",
                "registered": "2011-06-15",
                "latitude": -39.284948,
                "longitude": -94.364693
            },
            {
                "index": 1,
                "balance": "$2,990.82",
                "age": 37,
                "eyeColor": "green",
                "name": "Leann Mccarthy",
                "gender": "female",
                "company": "ENJOLA",
                "email": "leannmccarthy@enjola.com",
                "phone": "+1 (978) 483-2491",
                "registered": "2011-08-06",
                "latitude": 85.778963,
                "longitude": -2.60373
            },
            {
                "index": 2,
                "balance": "$2,829.36",
                "age": 30,
                "eyeColor": "green",
                "name": "Roslyn Colon",
                "gender": "female",
                "company": "ENTHAZE",
                "email": "roslyncolon@enthaze.com",
                "phone": "+1 (998) 427-2083",
                "registered": "2011-05-31",
                "latitude": -4.687061,
                "longitude": 28.335953
            },
            {
                "index": 3,
                "balance": "$3,416.76",
                "age": 28,
                "eyeColor": "green",
                "name": "Melva Douglas",
                "gender": "female",
                "company": "DOGNOST",
                "email": "melvadouglas@dognost.com",
                "phone": "+1 (936) 404-2492",
                "registered": "2012-05-10",
                "latitude": -22.041841,
                "longitude": 94.410694
            },
            {
                "index": 4,
                "balance": "$2,416.00",
                "age": 36,
                "eyeColor": "blue",
                "name": "Terra Holmes",
                "gender": "female",
                "company": "HONOTRON",
                "email": "terraholmes@honotron.com",
                "phone": "+1 (851) 457-3188",
                "registered": "2011-11-09",
                "latitude": 58.850473,
                "longitude": 52.004059
            },
            {
                "index": 5,
                "balance": "$2,067.94",
                "age": 38,
                "eyeColor": "brown",
                "name": "Cain Good",
                "gender": "male",
                "company": "BOINK",
                "email": "caingood@boink.com",
                "phone": "+1 (985) 572-3299",
                "registered": "2013-03-03",
                "latitude": 19.796163,
                "longitude": -126.906427
            },
            {
                "index": 6,
                "balance": "$1,007.86",
                "age": 35,
                "eyeColor": "brown",
                "name": "Sullivan Gardner",
                "gender": "male",
                "company": "EMPIRICA",
                "email": "sullivangardner@empirica.com",
                "phone": "+1 (867) 410-3944",
                "registered": "2011-09-14",
                "latitude": -86.032653,
                "longitude": 62.871981
            },
            {
                "index": 7,
                "balance": "$2,935.41",
                "age": 32,
                "eyeColor": "brown",
                "name": "Tamika Weber",
                "gender": "female",
                "company": "DOGNOSIS",
                "email": "tamikaweber@dognosis.com",
                "phone": "+1 (837) 584-2533",
                "registered": "2014-03-13",
                "latitude": -3.435644,
                "longitude": 155.873912
            },
            {
                "index": 8,
                "balance": "$1,782.70",
                "age": 32,
                "eyeColor": "green",
                "name": "Ava Prince",
                "gender": "female",
                "company": "CUJO",
                "email": "avaprince@cujo.com",
                "phone": "+1 (995) 517-3660",
                "registered": "2013-10-31",
                "latitude": 38.640911,
                "longitude": -105.084724
            },
            {
                "index": 9,
                "balance": "$2,560.45",
                "age": 32,
                "eyeColor": "brown",
                "name": "Harper Farley",
                "gender": "male",
                "company": "COMSTRUCT",
                "email": "harperfarley@comstruct.com",
                "phone": "+1 (852) 486-2269",
                "registered": "2014-02-02",
                "latitude": -59.519317,
                "longitude": -56.953219
            },
            {
                "index": 10,
                "balance": "$2,268.08",
                "age": 36,
                "eyeColor": "blue",
                "name": "Stella Weiss",
                "gender": "female",
                "company": "GEEKOLOGY",
                "email": "stellaweiss@geekology.com",
                "phone": "+1 (845) 429-3154",
                "registered": "2011-03-01",
                "latitude": 74.447052,
                "longitude": -168.176134
            },
            {
                "index": 11,
                "balance": "$1,851.00",
                "age": 27,
                "eyeColor": "brown",
                "name": "Knox Mathews",
                "gender": "male",
                "company": "XANIDE",
                "email": "knoxmathews@xanide.com",
                "phone": "+1 (843) 424-3041",
                "registered": "2012-05-12",
                "latitude": 62.249622,
                "longitude": 132.026464
            },
            {
                "index": 12,
                "balance": "$3,964.89",
                "age": 28,
                "eyeColor": "green",
                "name": "Desiree Mccullough",
                "gender": "female",
                "company": "BISBA",
                "email": "desireemccullough@bisba.com",
                "phone": "+1 (807) 402-2235",
                "registered": "2012-06-08",
                "latitude": -29.044273,
                "longitude": -163.320409
            },
            {
                "index": 13,
                "balance": "$2,810.95",
                "age": 25,
                "eyeColor": "blue",
                "name": "Sheppard Pacheco",
                "gender": "male",
                "company": "DARWINIUM",
                "email": "sheppardpacheco@darwinium.com",
                "phone": "+1 (995) 546-2718",
                "registered": "2012-07-19",
                "latitude": -24.858521,
                "longitude": 173.624238
            },
            {
                "index": 14,
                "balance": "$2,159.23",
                "age": 39,
                "eyeColor": "brown",
                "name": "Ruthie Kirkland",
                "gender": "female",
                "company": "PIVITOL",
                "email": "ruthiekirkland@pivitol.com",
                "phone": "+1 (911) 431-2179",
                "registered": "2012-03-02",
                "latitude": -2.540993,
                "longitude": -36.972684
            },
            {
                "index": 15,
                "balance": "$3,616.37",
                "age": 26,
                "eyeColor": "green",
                "name": "Becker Hurley",
                "gender": "male",
                "company": "ENTROFLEX",
                "email": "beckerhurley@entroflex.com",
                "phone": "+1 (823) 404-3518",
                "registered": "2012-12-04",
                "latitude": -85.505125,
                "longitude": -71.462444
            },
            {
                "index": 16,
                "balance": "$1,025.93",
                "age": 38,
                "eyeColor": "green",
                "name": "Sharp Kane",
                "gender": "male",
                "company": "OCEANICA",
                "email": "sharpkane@oceanica.com",
                "phone": "+1 (817) 509-2039",
                "registered": "2012-10-19",
                "latitude": 55.993551,
                "longitude": 86.105983
            },
            {
                "index": 17,
                "balance": "$1,870.10",
                "age": 37,
                "eyeColor": "green",
                "name": "Goldie Perkins",
                "gender": "female",
                "company": "ROCKLOGIC",
                "email": "goldieperkins@rocklogic.com",
                "phone": "+1 (841) 596-3350",
                "registered": "2013-10-30",
                "latitude": -38.164701,
                "longitude": -116.037255
            },
            {
                "index": 18,
                "balance": "$3,115.73",
                "age": 35,
                "eyeColor": "green",
                "name": "Barrera Craft",
                "gender": "male",
                "company": "FIBRODYNE",
                "email": "barreracraft@fibrodyne.com",
                "phone": "+1 (883) 557-2092",
                "registered": "2012-08-03",
                "latitude": 24.068308,
                "longitude": 163.236325
            },
            {
                "index": 19,
                "balance": "$1,618.89",
                "age": 34,
                "eyeColor": "blue",
                "name": "Nielsen Pickett",
                "gender": "male",
                "company": "UNISURE",
                "email": "nielsenpickett@unisure.com",
                "phone": "+1 (937) 512-2118",
                "registered": "2013-01-10",
                "latitude": -32.624053,
                "longitude": 1.712485
            },
            {
                "index": 20,
                "balance": "$1,909.27",
                "age": 28,
                "eyeColor": "green",
                "name": "Bentley Fry",
                "gender": "male",
                "company": "LETPRO",
                "email": "bentleyfry@letpro.com",
                "phone": "+1 (826) 402-3013",
                "registered": "2014-01-12",
                "latitude": -24.614389,
                "longitude": 147.511978
            },
            {
                "index": 21,
                "balance": "$3,574.58",
                "age": 38,
                "eyeColor": "blue",
                "name": "Catalina Small",
                "gender": "female",
                "company": "TRIPSCH",
                "email": "catalinasmall@tripsch.com",
                "phone": "+1 (880) 558-2068",
                "registered": "2014-07-28",
                "latitude": -33.124822,
                "longitude": 135.152078
            },
            {
                "index": 22,
                "balance": "$2,474.03",
                "age": 27,
                "eyeColor": "blue",
                "name": "Nicole Battle",
                "gender": "female",
                "company": "KRAGGLE",
                "email": "nicolebattle@kraggle.com",
                "phone": "+1 (859) 462-2257",
                "registered": "2012-10-02",
                "latitude": 49.359153,
                "longitude": -44.666951
            },
            {
                "index": 23,
                "balance": "$1,960.91",
                "age": 38,
                "eyeColor": "blue",
                "name": "Dean Barrera",
                "gender": "male",
                "company": "ISOTERNIA",
                "email": "deanbarrera@isoternia.com",
                "phone": "+1 (864) 422-3115",
                "registered": "2013-12-31",
                "latitude": -80.304885,
                "longitude": -109.418986
            },
            {
                "index": 24,
                "balance": "$2,031.64",
                "age": 33,
                "eyeColor": "green",
                "name": "Gail Gentry",
                "gender": "female",
                "company": "EXODOC",
                "email": "gailgentry@exodoc.com",
                "phone": "+1 (888) 595-2187",
                "registered": "2012-07-11",
                "latitude": -50.47636,
                "longitude": -39.391089
            },
            {
                "index": 25,
                "balance": "$1,346.13",
                "age": 26,
                "eyeColor": "green",
                "name": "Carr Finley",
                "gender": "male",
                "company": "APPLIDECK",
                "email": "carrfinley@applideck.com",
                "phone": "+1 (929) 461-3878",
                "registered": "2013-06-27",
                "latitude": -76.520623,
                "longitude": -44.437458
            },
            {
                "index": 26,
                "balance": "$3,507.76",
                "age": 33,
                "eyeColor": "green",
                "name": "Glover Campbell",
                "gender": "male",
                "company": "QOT",
                "email": "glovercampbell@qot.com",
                "phone": "+1 (872) 564-3196",
                "registered": "2012-05-31",
                "latitude": -24.015807,
                "longitude": 25.565732
            },
            {
                "index": 27,
                "balance": "$1,745.26",
                "age": 28,
                "eyeColor": "green",
                "name": "Vivian Joseph",
                "gender": "female",
                "company": "ZYTRAC",
                "email": "vivianjoseph@zytrac.com",
                "phone": "+1 (833) 465-3049",
                "registered": "2012-08-27",
                "latitude": 50.277929,
                "longitude": -1.563476
            },
            {
                "index": 28,
                "balance": "$1,757.48",
                "age": 37,
                "eyeColor": "blue",
                "name": "Gamble Stanley",
                "gender": "male",
                "company": "COMBOT",
                "email": "gamblestanley@combot.com",
                "phone": "+1 (814) 549-2574",
                "registered": "2012-05-20",
                "latitude": 62.841588,
                "longitude": 113.581481
            },
            {
                "index": 29,
                "balance": "$3,096.18",
                "age": 37,
                "eyeColor": "brown",
                "name": "Chandra Morin",
                "gender": "female",
                "company": "JUNIPOOR",
                "email": "chandramorin@junipoor.com",
                "phone": "+1 (937) 598-2365",
                "registered": "2013-09-09",
                "latitude": -20.038104,
                "longitude": -34.361742
            },
            {
                "index": 30,
                "balance": "$1,859.06",
                "age": 30,
                "eyeColor": "blue",
                "name": "Trujillo Salas",
                "gender": "male",
                "company": "ORGANICA",
                "email": "trujillosalas@organica.com",
                "phone": "+1 (980) 595-3403",
                "registered": "2013-09-20",
                "latitude": -16.842033,
                "longitude": 164.774287
            },
            {
                "index": 31,
                "balance": "$1,640.82",
                "age": 25,
                "eyeColor": "blue",
                "name": "Evelyn Haney",
                "gender": "female",
                "company": "ACUMENTOR",
                "email": "evelynhaney@acumentor.com",
                "phone": "+1 (871) 442-2635",
                "registered": "2011-12-28",
                "latitude": 88.958898,
                "longitude": -136.155975
            },
            {
                "index": 32,
                "balance": "$2,711.13",
                "age": 29,
                "eyeColor": "brown",
                "name": "Lott Haynes",
                "gender": "male",
                "company": "ISOPOP",
                "email": "lotthaynes@isopop.com",
                "phone": "+1 (914) 450-3597",
                "registered": "2014-05-28",
                "latitude": 27.49761,
                "longitude": -157.360324
            },
            {
                "index": 33,
                "balance": "$1,645.34",
                "age": 32,
                "eyeColor": "blue",
                "name": "Clare Pittman",
                "gender": "female",
                "company": "DRAGBOT",
                "email": "clarepittman@dragbot.com",
                "phone": "+1 (973) 404-3037",
                "registered": "2011-12-14",
                "latitude": 82.689179,
                "longitude": 123.44519
            },
            {
                "index": 34,
                "balance": "$2,491.33",
                "age": 35,
                "eyeColor": "green",
                "name": "David Gutierrez",
                "gender": "male",
                "company": "TRANSLINK",
                "email": "davidgutierrez@translink.com",
                "phone": "+1 (974) 416-2731",
                "registered": "2013-03-11",
                "latitude": 14.475407,
                "longitude": -155.796646
            },
            {
                "index": 35,
                "balance": "$2,979.22",
                "age": 25,
                "eyeColor": "brown",
                "name": "Shanna Burgess",
                "gender": "female",
                "company": "PHEAST",
                "email": "shannaburgess@pheast.com",
                "phone": "+1 (876) 550-3412",
                "registered": "2013-05-23",
                "latitude": 53.562881,
                "longitude": -171.120537
            },
            {
                "index": 36,
                "balance": "$3,405.19",
                "age": 40,
                "eyeColor": "blue",
                "name": "Mable Dunlap",
                "gender": "female",
                "company": "FILODYNE",
                "email": "mabledunlap@filodyne.com",
                "phone": "+1 (858) 478-2620",
                "registered": "2011-12-06",
                "latitude": -67.973364,
                "longitude": 165.119198
            },
            {
                "index": 37,
                "balance": "$3,100.88",
                "age": 32,
                "eyeColor": "green",
                "name": "Jane Alford",
                "gender": "female",
                "company": "AQUAMATE",
                "email": "janealford@aquamate.com",
                "phone": "+1 (836) 459-2106",
                "registered": "2013-09-17",
                "latitude": -38.360192,
                "longitude": -46.01766
            },
            {
                "index": 38,
                "balance": "$2,781.26",
                "age": 34,
                "eyeColor": "green",
                "name": "Berry Whitfield",
                "gender": "male",
                "company": "ZIDOX",
                "email": "berrywhitfield@zidox.com",
                "phone": "+1 (922) 572-2984",
                "registered": "2013-02-05",
                "latitude": 72.382783,
                "longitude": 1.277831
            },
            {
                "index": 39,
                "balance": "$2,316.01",
                "age": 36,
                "eyeColor": "blue",
                "name": "Griffin Barlow",
                "gender": "male",
                "company": "WEBIOTIC",
                "email": "griffinbarlow@webiotic.com",
                "phone": "+1 (833) 480-2845",
                "registered": "2012-11-23",
                "latitude": -10.090914,
                "longitude": -92.021228
            },
            {
                "index": 40,
                "balance": "$3,299.83",
                "age": 23,
                "eyeColor": "brown",
                "name": "White Mason",
                "gender": "male",
                "company": "ARCTIQ",
                "email": "whitemason@arctiq.com",
                "phone": "+1 (875) 591-3424",
                "registered": "2011-11-13",
                "latitude": -33.044386,
                "longitude": 92.508363
            },
            {
                "index": 41,
                "balance": "$3,945.68",
                "age": 25,
                "eyeColor": "blue",
                "name": "Snider Watson",
                "gender": "male",
                "company": "MAGNAFONE",
                "email": "sniderwatson@magnafone.com",
                "phone": "+1 (903) 584-3588",
                "registered": "2014-09-09",
                "latitude": -32.804025,
                "longitude": 2.40152
            },
            {
                "index": 42,
                "balance": "$2,303.88",
                "age": 38,
                "eyeColor": "green",
                "name": "Sloan Glass",
                "gender": "male",
                "company": "TROLLERY",
                "email": "sloanglass@trollery.com",
                "phone": "+1 (953) 468-2856",
                "registered": "2011-07-25",
                "latitude": 9.139541,
                "longitude": -111.819702
            },
            {
                "index": 43,
                "balance": "$2,909.24",
                "age": 40,
                "eyeColor": "green",
                "name": "Mccoy Bernard",
                "gender": "male",
                "company": "EMERGENT",
                "email": "mccoybernard@emergent.com",
                "phone": "+1 (960) 401-2058",
                "registered": "2014-01-29",
                "latitude": -10.391191,
                "longitude": 58.762795
            },
            {
                "index": 44,
                "balance": "$1,606.17",
                "age": 27,
                "eyeColor": "green",
                "name": "Dyer Stark",
                "gender": "male",
                "company": "YOGASM",
                "email": "dyerstark@yogasm.com",
                "phone": "+1 (877) 482-3782",
                "registered": "2012-09-08",
                "latitude": -23.647308,
                "longitude": 163.477872
            },
            {
                "index": 45,
                "balance": "$2,201.89",
                "age": 36,
                "eyeColor": "brown",
                "name": "Odom Donovan",
                "gender": "male",
                "company": "CEMENTION",
                "email": "odomdonovan@cemention.com",
                "phone": "+1 (859) 548-2819",
                "registered": "2014-04-08",
                "latitude": -36.004814,
                "longitude": 52.257446
            },
            {
                "index": 46,
                "balance": "$1,104.83",
                "age": 34,
                "eyeColor": "brown",
                "name": "Marcia Osborn",
                "gender": "female",
                "company": "OPTYK",
                "email": "marciaosborn@optyk.com",
                "phone": "+1 (872) 409-2834",
                "registered": "2013-06-12",
                "latitude": 62.849658,
                "longitude": 83.61517
            },
            {
                "index": 47,
                "balance": "$3,143.88",
                "age": 27,
                "eyeColor": "brown",
                "name": "Phelps Williams",
                "gender": "male",
                "company": "SUPPORTAL",
                "email": "phelpswilliams@supportal.com",
                "phone": "+1 (916) 527-3928",
                "registered": "2013-11-28",
                "latitude": -4.966233,
                "longitude": -62.125847
            },
            {
                "index": 48,
                "balance": "$1,401.83",
                "age": 32,
                "eyeColor": "blue",
                "name": "Cote Ingram",
                "gender": "male",
                "company": "ENERVATE",
                "email": "coteingram@enervate.com",
                "phone": "+1 (948) 597-2911",
                "registered": "2013-01-24",
                "latitude": -58.650124,
                "longitude": 54.562469
            },
            {
                "index": 49,
                "balance": "$3,481.22",
                "age": 40,
                "eyeColor": "blue",
                "name": "Justice Carver",
                "gender": "male",
                "company": "SENTIA",
                "email": "justicecarver@sentia.com",
                "phone": "+1 (817) 434-2495",
                "registered": "2012-02-22",
                "latitude": 69.311286,
                "longitude": 74.297143
            }
        ];

    }]);
