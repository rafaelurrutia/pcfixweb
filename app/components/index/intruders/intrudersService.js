pcfixwebApp.service("getIntrudersService", function ($http, $q) {

    this.getIntruders = function ($scope, getIntrudersSource) {
        var deferred = $q.defer();

        var request = $http({
            method: "get",
            url: getIntrudersSource,
            timeout: deferredAbort.promise
        });

        var promise = request.then(
            function (response) {
                return (response.data);
            },
            function (response) {
                return ($q.reject("Something went wrong"));
            }
        );

        promise.abort = function () {
            deferredAbort.resolve();
        };

        promise.finally(
            function () {
                console.info("Cleaning up object references.");
                promise.abort = angular.noop;
                deferredAbort = request = promise = null;
            }
        );

        return (promise);


        /*
                $http.get(getIntrudersSource).then(function (data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
                
                */
    };


    return ({
        getFriends: getFriends
    });

});

pcfixwebApp.service("internetService", function ($http, $q) {

    this.internet = function ($scope, internetSource) {
        var deferred = $q.defer();
        $http.get(internetSource).then(function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };

});

pcfixwebApp.service("connectionVTRService", function ($http, $q) {

    this.connectionVTR = function ($scope, connectionVTRSource) {
        var deferred = $q.defer();
        $http.get(connectionVTRSource).then(function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };

});

pcfixwebApp.factory("getIntrudersFactory", function ($http, $q) {     
    var getIntruders = function () {    
        var canceller = $q.defer();     
        var cancel = function (reason) {        
            canceller.resolve(reason);    
        };     
        var promise =     $http.get(getIntrudersSource, {
            timeout: canceller.promise
        })                .then(function (response) {                   
            return response.data;                
        });         
        return {            
            promise: promise,
            cancel: cancel        
        };    
    };     
    return {        
        getById: ""    
    }; 
});
