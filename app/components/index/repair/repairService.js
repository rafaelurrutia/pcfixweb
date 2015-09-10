pcfixwebApp.factory('albumService', function ($http, $q) {
    /*
    return {
        getWeather: function () {
            return $http.get(getIntrudersSource)
                .then(function (response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function (response) {
                    return $q.reject(response.data);
                });
        }
    };
    */

    return {
        getAll: getAll
    }

    function getAll() {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get(getIntrudersSource)
            .success(function (data) {
                defered.resolve(data);
            })
            .error(function (err) {
                defered.reject(err)
            });

        return promise;
    }

});

pcfixwebApp.service("repairService", function ($http) {

    var verdad = "True";
    var falso = "False";

    var flagStatus1 = false;
    var flagStatus2 = false;
    var flagStatus3 = false;

    this.variables = function ($scope) {
        $scope.ctrl = "repairController";

        $scope.repairSectionClass = "index_box";
        $scope.repairSectionClassHead = "index_repairEnableHead";

        $scope.channelSectionClass = "index_box";
        $scope.channelSectionClassHead = "index_channelDisableHead index_boxClicked";

        $scope.intrudersSectionClass = "index_box";
        $scope.intrudersSectionClassHead = "index_intrudersDisableHead index_boxClicked";

        $scope.speedtestSectionClass = "index_box";
        $scope.speedtestSectionClassHead = "index_speedtestDisableHead index_boxClicked";

        $scope.chatSectionClass = "index_box";
        $scope.chatSectionClassHead = "index_chatDisableHead index_boxClicked";

        //cuadros de secciones
        $scope.sectionRepair_1 = true;
        $scope.sectionRepair_2 = false;
        $scope.sectionRepair_3 = false;
        $scope.sectionRepair_4 = false;
        $scope.sectionRepair_5 = false;
    }

    this.repairText1 = function ($scope, repair) {

        var repairText1 = "";
        $scope.repairText1 = "";

        if (repair[0].repair_networkprobe1 == verdad) {
            repairText1 = $scope.repair_networkprobe1 + "<br>";
            $scope.repairText1 = repairText1;
            $scope.enablednetShow = true;
        }

        if (repair[0].repair_networkprobe2 == verdad) {
            repairText1 = repairText1 + $scope.repair_networkprobe2 + "<br>";
            $scope.repairText1 = repairText1;
            $scope.enabledDHCPShow = true;
        }

        if (repair[0].repair_networkprobe3 == verdad) {
            repairText1 = repairText1 + $scope.repair_networkprobe3 + "<br>";
            $scope.repairText1 = repairText1;
            $scope.enabledDNSShow = true;
        }

        if (repair[0].repair_networkprobe4 == verdad) {
            repairText1 = repairText1 + $scope.repair_networkprobe4 + "<br>";
            $scope.repairText1 = repairText1;
            $scope.enabledDNSShow = true;
        }

        if (repair[0].repair_networkprobe5 == verdad) {
            repairText1 = repairText1 + $scope.repair_networkprobe5;
            $scope.repairText1 = repairText1;
            $scope.enablednetShow = true;
            $scope.enabledDHCPShow = true;
            $scope.enabledDNSShow = true;
        }

        if (
            (repair[0].repair_networkprobe1 == falso) &&
            (repair[0].repair_networkprobe2 == falso) &&
            (repair[0].repair_networkprobe3 == falso) &&
            (repair[0].repair_networkprobe4 == falso) &&
            (repair[0].repair_networkprobe5 == falso)
        ) {

            $scope.repairText1Font = "";
            $scope.repairText1 = $scope.repair_withoutproblem;

            $scope.image1Src = "assets/img/elementos-02.png";
            $scope.repairImage = "";

            $scope.enablednetShow = false;
            $scope.enabledDHCPShow = false;
            $scope.enabledDNSShow = false;

            flagStatus1 = true;

        } else {
            $scope.repairText1Font = {
                'font-size': '8pt',
                'text-align': 'left'
            };

            $scope.image1Src = "assets/img/elementos-03.png";
            $scope.repairImage = "";
        }

    }

    this.repairText2 = function ($scope, repair) {

        var repairText2 = "";
        $scope.repairText2 = "";

        if (repair[1].repair_browserprobe1 == verdad) {
            repairText2 = $scope.repair_browserprobe1 + "<br>";
            $scope.repairText2 = repairText2;
            $scope.desactivateFirefoxProxyShow = true;
        }

        if (repair[1].repair_browserprobe2 == verdad) {
            repairText2 += $scope.repair_browserprobe2 + "<br>";
            $scope.repairText2 = repairText2;
            $scope.desactivateIEProxyShow = true;
        }

        if (repair[1].repair_browserprobe3 == verdad) {
            repairText2 += $scope.repair_browserprobe3 + "<br>";
            $scope.repairText2 = repairText2;
            $scope.desactivateIEofflineShow = true;
        }

        if (repair[1].repair_browserprobe4 == verdad) {
            repairText2 += $scope.repair_browserprobe4;
            $scope.repairText2 = repairText2;
        }

        if (
            (repair[1].repair_browserprobe1 == falso) &&
            (repair[1].repair_browserprobe2 == falso) &&
            (repair[1].repair_browserprobe3 == falso) &&
            (repair[1].repair_browserprobe4 == falso)
        ) {

            $scope.repairText2Font = "";
            $scope.repairText2 = $scope.repair_withoutproblem;

            $scope.image2Src = "assets/img/elementos-02.png";
            $scope.repairImage = "";

            $scope.desactivateIEofflineShow = false;
            $scope.desactivateFirefoxProxyShow = false;
            $scope.desactivateIEProxyShow = false;

            flagStatus2 = true;

        } else {
            $scope.repairText2Font = {
                'font-size': '8pt',
                'text-align': 'left'
            };

            $scope.image2Src = "assets/img/elementos-03.png";
            $scope.repairImage = "";
        }

    }

    this.repairText3 = function ($scope, repair) {

        var repairText3 = "";
        $scope.repairText3 = "";

        if (repair[2].repair_securityprobe1 == verdad) {
            repairText3 = $scope.repair_securityprobe1 + "<br>";
            $scope.repairText3 = repairText3;
        }

        if (repair[2].repair_securityprobe2 == verdad) {
            repairText3 += $scope.repair_securityprobe2 + "<br>";
            $scope.repairText3 = repairText3;
        }

        if (repair[2].repair_securityprobe3 == verdad) {
            repairText3 += $scope.repair_securityprobe3;
            $scope.repairText3 = repairText3;
        }

        if (
            (repair[2].repair_securityprobe1 == falso) &&
            (repair[2].repair_securityprobe2 == falso) &&
            (repair[2].repair_securityprobe3 == falso)
        ) {

            $scope.repairText3Font = "";
            $scope.repairText3 = $scope.repair_withoutproblem;

            $scope.image3Src = "assets/img/elementos-02.png";
            $scope.repairImage = "";

            flagStatus3 = true;

        } else {
            $scope.repairText3Font = {
                'font-size': '8pt',
                'text-align': 'left'
            };

            $scope.image3Src = "assets/img/elementos-03.png";
            $scope.repairImage = "";
        }

    };

    this.disableButton = function ($scope) {
        if (
            flagStatus1 &&
            flagStatus2 &&
            flagStatus3
        ) {
            $scope.repair_repairproblemButtonShow = false;
            $scope.checkboxRepairRecomended = false;
        } else {
            $scope.repair_repairproblemButtonShow = true;
            $scope.checkboxRepairRecomended = true;
        }

    };

    this.intervalos = function ($scope) {

    };

});
