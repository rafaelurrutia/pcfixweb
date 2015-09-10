pcfixwebApp.controller('informationController', function ($scope, $http, $q, $interval, $location, postsService) {
    
    $scope.ctrl = "informationController";
    /*
                getInformationService.getInformation($scope, getInformationSource)
                    .then(function (data) {
                        var value = data.data;

                        console.log(" ");
                        console.clear();
                        console.log("call controller:   informationController");
                        console.log("src controller:    app/components/information/InformationController.js");
                        console.log("call service:      getInformationService");
                        console.log("src service:       app/components/information/InformationService.js");
                        console.log("values: ");
                        console.log(value);

                        $scope.nameos = value.data[0].nameos;
                        $scope.packos = value.data[0].packos;

                        $scope.memory = value.data[1].memory;
                        $scope.unit = value.data[1].unit;

                    }, function (error) {
                        console.error(error);
                    });
        */
    /*
                $scope.getInformation = function () {

                    var intruders;

                    var promo = $interval(function () {
                        $http({
                                method: 'GET',
                                url: getIntrudersSource,
                                timeout: ($scope.timeout * 1000)
                            })
                            .success(function (data, status, headers, config) {

                                intruders = data.data;
                                $scope.intruders = intruders;
                                $scope.loadingTable = false;

                                if (data.finish == "true")
                                    $interval.cancel(promo);
                            });
                        cont++;


                        //    if (cont == 5)
                        //      $interval.cancel(promo);
                    }, (timeToReloadUrlIntruders * 1000));

                };
        
        */
    /*
        $scope.addOne = function (num) {
            var q = $q.defer();
            if (angular.isNumber(num)) {
                q.resolve(num + 1);
            } else {
                q.reject('NaN');
            }
            return q.promise;
        }

        $scope.valor = 0;
        $scope.promise = $scope.addOne($scope.valor);
        $scope.promise.then(
            function (v) {
                $scope.valor = v
            },
            function (err) {
                $scope.valor = err
            }
        );
    });
    */

    $scope.getInformation = function () {
        postsService.items().then(function (res) {
            var value = res.data;
            //    var intruders = res.data;
            //    $scope.intruders = intruders;

            $scope.nameos = value.data[0].nameos;
            $scope.packos = value.data[0].packos;

            if (value.data[3].activefirewall == "True") {
                $scope.info_firewallactivate = $scope.info_firewallactivate;
            } else if (value.data[3].activefirewall == "False") {
                $scope.info_firewallactivate = $scope.info_firewalloff;
            }

            $scope.info_cardnets = [];
            var info_cardnets = {};

            for (var i = 0; i < Object.keys(value.data[2]).length; i++) {

                var network = value.data[2]["network" + i];
                var newNetwork = network.split(";");
                var info_cardnet = {};
                var replaceString;
                for (var x = 0; x < newNetwork.length; x++) {
                    if (newNetwork[x].indexOf("name:") > -1) {
                        replaceString = newNetwork[x].replace("name:", "");
                        info_cardnet["name"] = replaceString.trim();
                        continue;
                    }
                    if (newNetwork[x].indexOf("mac:") > -1) {
                        replaceString = newNetwork[x].replace("mac:", "");
                        info_cardnet["mac"] = replaceString.trim();
                        continue;
                    }
                    if (newNetwork[x].indexOf("IPv4:") > -1) {
                        replaceString = newNetwork[x].replace("IPv4:", "");
                        info_cardnet["IPv4"] = replaceString.trim();
                        continue;
                    }
                    if (newNetwork[x].indexOf("IPv6:") > -1) {
                        replaceString = newNetwork[x].replace("IPv6:", "");
                        info_cardnet["IPv6"] = replaceString.trim();
                        continue;
                    }
                    if (newNetwork[x].indexOf("DNS:") > -1) {
                        replaceString = newNetwork[x].replace("DNS:", "");
                        info_cardnet["DNS"] = replaceString.trim();
                        continue;
                    }
                    if (newNetwork[x].indexOf("gateway:") > -1) {
                        replaceString = newNetwork[x].replace("gateway:", "");
                        info_cardnet["gateway"] = replaceString.trim();
                        continue;
                    }

                }

                info_cardnets = {
                    name: info_cardnet.name,
                    mac: info_cardnet.mac,
                    IPv4: (info_cardnet.hasOwnProperty('IPv4')) ? info_cardnet.IPv4 : "",
                    IPv6: (info_cardnet.hasOwnProperty('IPv6')) ? info_cardnet.IPv6 : "",
                    DNS: (info_cardnet.hasOwnProperty('DNS')) ? info_cardnet.DNS : "",
                    gateway: (info_cardnet.hasOwnProperty('gateway')) ? info_cardnet.gateway : ""
                };

                $scope.info_cardnets.push(info_cardnets);

            }

            //console.info("%c %s", "color:blue;",$scope.info_cardnets);
            //console.info($scope.info_cardnets);

            //ANTIVIRUS
            $scope.info_antivirus = [];
            var info_antivirus = {};


            for (var i = 0; i < Object.keys(value.data[5]).length; i++) {

                var antivirus = value.data[5]["antivirus" + i];
                var newantivirus = antivirus.split(";");
                var info_av = {};
                var replaceString;
                for (var x = 0; x < newantivirus.length; x++) {
                    if (newantivirus[x].indexOf("title:") > -1) {
                        replaceString = newantivirus[x].replace("title:", "");
                        info_av["title"] = replaceString.trim();
                        continue;
                    }
                    if (newantivirus[x].indexOf("status:") > -1) {
                        replaceString = newantivirus[x].replace("status:", "");
                        info_av["status"] = replaceString.trim();
                        continue;
                    }
                    if (newantivirus[x].indexOf("needUpgrade:") > -1) {
                        replaceString = newantivirus[x].replace("needUpgrade:", "");
                        info_av["needUpgrade"] = replaceString.trim();
                        continue;
                    }
                }

                info_antivirus = {
                    title: info_av.title,
                    status: (info_av.status == "True") ? $scope.info_dialogboxactivated : $scope.info_dialogboxoff,
                    needUpgrade: (info_av.needUpgrade == "True") ? $scope.info_dialogboxupdated : $scope.info_dialogboxoutdated
                };

                $scope.info_antivirus.push(info_antivirus);

            }

            //console.info("%c %s", "color:blue;",$scope.info_cardnets);
            console.info($scope.info_antivirus);


        });
    }

    $scope.hideInformation_dialogmsg1 = false;

    var promise = $interval(function () {
        $scope.getInformation();
    }, 3000);

    $scope.$on('$destroy', function () {
        $interval.cancel(promise);
    });

    $scope.home = function () {
        $location.path('/');
        //        alert("hola");
    }

});
