pcfixwebApp.factory('wifiFactory', function ($http, $q) {

    return {
        getWifi: getWifi
    }

    function getWifi() {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get(getWifiSource)
            .success(function (data) {
                defered.resolve(data);
            })
            .error(function (err) {
                defered.reject(err)
            });

        return promise;
    }

});

pcfixwebApp.controller('wifiController', function ($scope, $http, $location, $interval, wifiFactory) {

    $scope.ctrl = "repairController";

    $scope.menuInicioSelectedActive = "";
    $scope.menuWifiSelectedActive = "active";
    $scope.menuInformationSelectedActive = "";

    $scope.channel = function () {
        $location.path('/channel');
    }




    var setRandomizedCollection = function () {
        wifiFactory.getWifi().then(function (data) {
            /*        
            $scope.wifi_namenet = data.;
            $scope.wifi_securitywifi = data.;
            $scope.wifi_intensitysignal = data.;
            $scope.wifi_channelwifi = data.;
*/
            if (data.finish == 'true') {
                //    $scope.stop();
            }
        }).catch(function (err) {
            // Tratar el error
        });

    }

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

});
