/*
pcfixwebApp.service("getInformationService", function ($http, $q) {

    this.getInformation = function ($scope, getInformationSource) {
        var deferred = $q.defer();
        $http.get(getInformationSource).then(function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };

});
*/
/*
pcfixwebApp.service("getInformation", function ($http, $q) {

    return {
        items: function () {
            var deferred, result = [];
            deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: getInformationSource
                })
                .then(function (res) {
                    deferred.resolve(res);
                })
                .then(function (error) {
                    deferred.reject(error);
                })
            return deferred.promise;
        }
    }

});
*/
pcfixwebApp.service("postsService", ["$http", "$q", function ($http, $q)
    {
        return {
            items: function () {
                var deferred, result = [];
                deferred = $q.defer();
                $http({
                        method: 'GET',
                        url: getInformationSource
                    })
                    .then(function (res) {
                        deferred.resolve(res);
                    })
                    .then(function (error) {
                        deferred.reject(error);
                    })
                return deferred.promise;
            }
        }
}]);
