pcfixwebApp.controller('repairController', function ($scope, $http, $timeout, $location, $interval, repairService, albumService) {

    //    $scope.ctrl = "repairController";

    repairService.variables($scope);

    repairService.intervalos($scope);

    //
    /*
        var makePromiseWithSon = function () {
            albumService.getWeather()
                .then(function (data) {
                    if (data.finish == 'false') {
                        return data;
                    } else {
                        return {
                            error: "lala"
                        };
                        //    console.error(data);
                    }
                }, function (error) {
                    //  console.error("error\n" + error);
                    return {
                        error: "lala"
                    };
                });
        };

        console.log(albumService.getWeather());
    */

    albumService.getAll().then(function (data) {
        $scope.elementos = data;
        console.log($scope.elementos);
    }).catch(function (err) {
        // Tratar el error
    });


    //    

    var promise;

    $scope.start = function () {
        $scope.stop();
        promise = $interval(setRandomizedCollection, timeToReloadUrlgetSearchProblem * 1000);
    };

    $scope.stop = function () {
        $interval.cancel(promise);
    };

    $scope.start();

    $scope.$on('$destroy', function () {
        $scope.stop();
    });


    function setRandomizedCollection() {
        console.log("ho");
    }

    $scope.showElement = function (section) {
        $scope[section] = true;
        $scope.sectionRepair_1 = false;
    }

    $scope.redirectToHome = function () {
        $location.path('/');
    }

    $scope.showHideElement = function (sectionShow, sectionHide) {
        $scope[sectionShow] = true;
        $scope[sectionHide] = false;
    }

    $scope.getRepair = function () {

        var repair;
        var fix;

        $scope.enablednet = false;
        $scope.enabledDHCP = false;
        $scope.enabledDNS = false;
        $scope.desactivateIEoffline = false;
        $scope.desactivateFirefoxProxy = false;
        $scope.desactivateIEProxy = false;

        $scope.enablednetShow = false;
        $scope.enabledDHCPShow = false;
        $scope.enabledDNSShow = false;
        $scope.desactivateIEofflineShow = false;
        $scope.desactivateFirefoxProxyShow = false;
        $scope.desactivateIEProxyShow = false;

        $scope.repairText1 = "Detectando problemas";
        $scope.repairText2 = "Detectando problemas";
        $scope.repairText3 = "Detectando problemas";

        $scope.checkboxRepairRecomended = true;

        $scope.image1Src = "assets/img/iconoEspera.gif";
        $scope.repairImage = "repairImage";
        $scope.image1Width = 30;
        $scope.image1Height = 30;

        $scope.image2Src = "assets/img/iconoEspera.gif";
        $scope.repairImage = "repairImage";
        $scope.image2Width = 30;
        $scope.image2Height = 30;

        $scope.image3Src = "assets/img/iconoEspera.gif";
        $scope.repairImage = "repairImage";
        $scope.image3Width = 30;
        $scope.image3Height = 30;

        $scope.myStyle = {
            'width': '0%'
        };
        $scope.numberToRepair = 0;

        $scope.statusRepairText = true;
        $scope.global_buttoncancelarButtonShow = true;

        $scope.checkboxRecomendedRepair = true;

        var promo = $interval(function () {
            $http({
                    method: 'GET',
                    url: getSearchProblem,
                    timeout: (timeToReloadUrlgetSearchProblem * 1000)
                })
                .success(function (data, status, headers, config) {

                    var verdad = "True";
                    var falso = "False";

                    repair = data.data;

                    if (repair.length > 0) {
                        $scope.myStyle = {
                            'width': '41.5%'
                        };
                        $scope.numberToRepair = 5;
                        repairService.repairText1($scope, repair);

                    }


                    if (repair.length > 1) {

                        $scope.myStyle = {
                            'width': '74.7%'
                        };
                        $scope.numberToRepair = 9;

                        repairService.repairText1($scope, repair);
                        repairService.repairText2($scope, repair);

                    }

                    if (repair.length > 2) {

                        $scope.myStyle = {
                            'width': '100%'
                        };
                        $scope.numberToRepair = 12;

                        $scope.statusRepairText = false;
                        $scope.statusRepairFinishText = true;

                        $scope.global_buttoncancelarButtonShow = false;
                        $scope.global_buttonbacktotopButtonShow = true;
                        $scope.repair_repairproblemButtonShow = true;

                        repairService.repairText1($scope, repair);
                        repairService.repairText2($scope, repair);
                        repairService.repairText3($scope, repair);

                    }

                    repairService.disableButton($scope);

                    $scope.repairList = $scope.repairText1 + "<br>" + $scope.repairText2 + "<br>" + $scope.repairText3;

                });

        }, (timeToReloadUrlgetSearchProblem * 1000));

    };

    $scope.repair_repairproblemButtonClick = function () {

        if ($scope.checkboxRecomendedRepair) {
            $scope.hideRepair_content = {
                'background-color': '#ffffff',
                'opacity': '0.1'
            };
            $scope.hideRepair_dialogmsg2 = true;
            //   $scope.repairList=repairList;
        } else {
            $scope.sectionRepair_2 = false;
            $scope.sectionRepair_4 = true;

            console.log("lala");
            $scope.repairList = "lala";
        }
    };

    $scope.fix = function (valueButton) {

        $scope.hideRepair_content = {
            'background-color': '#ffffff',
            'opacity': '1'
        };
        $scope.hideRepair_dialogmsg3 = false;
        $scope.sectionRepair_2 = false;
        $scope.sectionRepair_5 = true;

        $scope.image1FixSrc = "assets/img/iconoEspera.gif";
        $scope.image2FixSrc = "assets/img/iconoEspera.gif";
        $scope.image3FixSrc = "assets/img/iconoEspera.gif";
        $scope.fixImage = "repairImage";

        console.log(getFixProblem +
            '?enablednet=' + $scope.enablednet +
            ';enabledDHCP=' + $scope.enabledDHCP +
            ';enabledDNS=' + $scope.enabledDNS +
            ';desactivateIEoffline=' + $scope.desactivateIEoffline +
            ';desactivateFirefoxProxy=' + $scope.desactivateFirefoxProxy +
            ';desactivateIEProxy=' + $scope.desactivateIEProxy +
            ';restorepoint=' + valueButton
        );



        var promoFix = $interval(function () {
            $http({
                    method: 'GET',
                    url: getFixProblem,
                    timeout: (timeToReloadUrlgetFixProblem * 1000)
                })
                .success(function (data, status, headers, config) {

                    var verdad = "true";
                    var falso = "false";

                    fix = data.data;

                    $scope.fixproblemnetworkText = "Reparando";
                    $scope.fixproblembrowserText = "Reparando";
                    $scope.fixsecurityText = "Reparando";

                    $scope.image1FixSrc = "assets/img/iconoEspera.gif";
                    $scope.image2FixSrc = "assets/img/iconoEspera.gif";
                    $scope.image3FixSrc = "assets/img/iconoEspera.gif";

                    if (fix.length > 0) {
                        if (fix[0].fixproblemnetwork == verdad) {
                            $scope.fixproblemnetworkText = "Sin problemas";
                            $scope.image1FixSrc = "assets/img/elementos-02.png";
                            $scope.fixImage = "";
                        } else {
                            $scope.fixproblemnetworkText = "No se pudo repar<r";
                            $scope.image1FixSrc = "assets/img/elementos-03.png";
                            $scope.fixImage = "";
                        }
                    }


                    if (fix.length > 1) {
                        if (fix[1].fixproblembrowser == verdad) {
                            $scope.fixproblembrowserText = "Sin problemas";
                            $scope.image2FixSrc = "assets/img/elementos-02.png";
                            $scope.fixImage = "";
                        } else {
                            $scope.fixproblembrowserText = "No se pudo repar<r";
                            $scope.image2FixSrc = "assets/img/elementos-03.png";
                            $scope.fixImage = "";
                        }
                    }

                    if (fix.length > 2) {
                        if (fix[2].fixsecurityText == verdad) {
                            $scope.fixsecurityText = "Sin problemas";
                            $scope.image3FixSrc = "assets/img/elementos-02.png";
                            $scope.fixImage = "";
                        } else {
                            $scope.fixsecurityText = "No se pudo repar<r";
                            $scope.image3FixSrc = "assets/img/elementos-03.png";
                            $scope.fixImage = "";
                        }
                    }
                    console.log(data.finish);
                    if (data.finish == "true")
                        $interval.cancel(promo);

                });

        }, (timeToReloadUrlgetFixProblem * 1000));

        /*
        hideRepair_content={'background-color':'#ffffff','opacity': '1'}; hideRepair_dialogmsg3=false; showHideElement('sectionRepair_5','sectionRepair_2')
        */
    }

});
