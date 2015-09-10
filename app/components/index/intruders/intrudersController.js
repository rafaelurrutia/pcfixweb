pcfixwebApp.controller('intrudersController', function ($scope, $http, $document, $interval,$location ,getIntrudersFactory, postsService) {

    $scope.ctrl = "intrudersController";

    $scope.repairSectionClass = "index_box";
    $scope.repairSectionClassHead = "index_channelDisableHead index_boxClicked";

    $scope.channelSectionClass = "index_box";
    $scope.channelSectionClassHead = "index_channelDisableHead index_boxClicked";

    $scope.intrudersSectionClass = "index_box";
    $scope.intrudersSectionClassHead = "index_intrudersEnableHead";

    $scope.speedtestSectionClass = "index_box";
    $scope.speedtestSectionClassHead = "index_speedtestDisableHead index_boxClicked";

    $scope.chatSectionClass = "index_box";
    $scope.chatSectionClassHead = "index_chatDisableHead index_boxClicked";

    //mostrar div llamado sectionIntruders_1
    $scope.sectionIntruders_1 = true;

    //al hacer click se mostrara div llamado sectionIntruders_2 y se oculta sectionIntruders_1
    $scope.showElement = function (section) {
        $scope[section] = true;
        $scope.sectionIntruders_1 = false;
    }

    $scope.cancelgetIntruders = function () {
        $scope.sectionIntruders_global_buttoncancelar = false;
        $scope.sectionIntruders_global_buttonbacktotop = true;
        $scope.sectionIntruders_global_buttonequipmentidonotknow = true;

        $interval.cancel(promo);

    };

    $scope.getIntruders = function () {
        $scope.sectionIntruders_global_buttoncancelar = true;
        $scope.sectionIntruders_global_buttonbacktotop = false;
        $scope.sectionIntruders_global_buttonequipmentidonotknow = false;

        $scope.loadingTable = true;


        $scope.timeout = 5;
        $scope.delay = 3;

        var cont = 0;
        var intruders;

        console.log(" ");
        console.clear();
        console.log("call controller:   intrudersController");
        console.log("src controller:    app/components/index/intruders/intrudersController.js");
        console.log("call service:      none");
        console.log("src service:       app/components/index/intruders/intrudersService.js");

        var promo = $interval(function () {
            $http({
                    method: 'GET',
                    url: getIntrudersSource,
                    timeout: ($scope.timeout * 1000)
                })
                .success(function (data, status, headers, config) {
                    $scope.sectionIntruders_global_buttoncancelar = false;
                    $scope.sectionIntruders_global_buttonbacktotop = true;
                    $scope.sectionIntruders_global_buttonequipmentidonotknow = true;

                    intruders = data.data;
                    $scope.length = intruders.length;
                    $scope.intruders_finddevices = $scope.intruders_founded + ' ' + $scope.length + ' ' + $scope.intruders_devices;
                    $scope.intruders = intruders;

                    console.log("values: ");
                    console.log($scope.intruders);
                    console.log(" ");

                    $scope.loadingTable = false;

                    if (data.finish == "true")
                        $interval.cancel(promo);
                });
            cont++;


            //    if (cont == 5)
            //      $interval.cancel(promo);
        }, (timeToReloadUrlIntruders * 1000));

    };

    $scope.movies = [];
    $scope.requests = [];
    $scope.id = 1;

    $scope.start = function () {

        var request = getIntrudersFactory.getIntruders();

        request.promise.then(function (movie) {
            $scope.movies.push(movie);

        }, function (reason) {
            console.log(reason);
        });
    };

    $scope.cancel = function (request) {
        request.cancel("User cancelled");
        clearRequest(request);
    };
    
    $scope.home = function () {
        $location.path('/');
    }
    $scope.wifi = function () {
        $location.path('/wifi');
    }

    var clearRequest = function (request) {
        $scope.requests.splice($scope.requests.indexOf(request), 1);
    };
});
