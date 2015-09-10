var pcfixwebApp = angular.module('pcfixwebApp', ['ngRoute', 'highcharts-ng','ngSanitize']);

pcfixwebApp.config(function ($routeProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'app/components/index/home/homeView.html'
    }).when('/wifi', {
        templateUrl: urlWifiPath,
        controller: 'wifiController'
    }).when('/information', {
        templateUrl: urlInformationPath,
        controller: 'informationController'
    }).when('/repair', {
        templateUrl: urlRepairPath,
        controller: 'repairController'
    }).when('/channel', {
        templateUrl: urlChannelPath,
        controller: 'channelController'
    }).when('/intruders', {
        templateUrl: urlIntrudersPath,
        controller: 'intrudersController'
    }).when('/speedtest', {
        templateUrl: urlSpeedtestPath,
        controller: 'speedtestController'
    }).when('/chat', {
        templateUrl: urlChatPath,
        controller: 'chatController'
    }).otherwise({
        redirectTo: '/',
        controller: 'mainController'
    });

});

pcfixwebApp.directive('appheader', function () {
    return {
        templateUrl: 'app/shared/header/headerView.html'
    };
});

pcfixwebApp.directive('appfooter', function () {
    return {
        templateUrl: 'app/shared/footer/footerView.html'
    };
});
