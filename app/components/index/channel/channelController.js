pcfixwebApp.controller('channelController', function ($scope, $http) {

    $scope.ctrl = "channelController";
    
    $scope.repairSectionClass = "index_box";
    $scope.repairSectionClassHead = "index_repairDisableHead index_boxClicked";

    $scope.channelSectionClass = "index_box";
    $scope.channelSectionClassHead = "index_channelEnableHead";

    $scope.intrudersSectionClass = "index_box";
    $scope.intrudersSectionClassHead = "index_intrudersDisableHead index_boxClicked";

    $scope.speedtestSectionClass = "index_box";
    $scope.speedtestSectionClassHead = "index_speedtestDisableHead index_boxClicked";

    $scope.chatSectionClass = "index_box";
    $scope.chatSectionClassHead = "index_chatDisableHead index_boxClicked";

    $scope.wifiDataTable = [
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        },
        {
            ssid: 'ARRIS-7392',
            signal: '99',
            rssi: '-51',
            primarychannel: '1',
            security: 'WPA2-Personal',
            mac: '001DD4D37390',
            timestamp: '11:35:57'
        }

    ];

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'spline',
                width: 565,
                height: 180,
                backgroundColor: '#ffffff'
            }
        },
        tooltip: {
            enabled: false
        },
        xAxis: {
            categories: [
                         '', '', '',
                         '', '', '',
                         '', '', '1',
                         '', '', '2',
                         '', '', '3',
                         '', '', '4',
                         '', '', '5',
                         '', '', '6',
                         '', '', '7',
                         '', '', '8',
                         '', '', '9',
                         '', '', '10',
                         '', '', '11',
                         '', '', '12',
                         '', '', '13',
                         '', '', '14',
                         '', '', '',
                         '', '', ''],
            tickLength: 0,
        },
        yAxis: {
            min: 0,
            max: 100,
            tickInterval: 10,
            lineWidth: 1,
            title: {
                text: 'dBm'

            },
        },
        series: [{
            showInLegend: false,
            name: '1',
            data: [
                   null, null, 0,
                    1, 51, 51,
                   51, 51, 51,
                   51, 51, 51,
                   51, 1, 0,
                   null, null, null,
                   null, null, null,
                   null, null, null,
                   null, null, null,
                  null, null, null,
                  null, null, null,
                  null, null, null,
                  null, null, null,
                  null, null, null,
                   null, null, null,
                   null, null, null,
                  null, null, null,
                  null, null, null
                  ],
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }, {
            showInLegend: false,
            name: '1',
            data: [
                null, null, null,
                null, null, null,
                null, null, 0,
                1, 20, 20,
                20, 20, 20,
                20, 20, 20,
                20, 1, 0,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null
                  ],
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }, {
            showInLegend: false,
            name: '1',
            data: [
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, 0,
                1, 30, 30,
                30, 30, 30,
                30, 30, 30,
                30, 30, 30,
                30, 30, 30,
                30, 1, 0,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null
                  ],
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }, {
            showInLegend: false,
            name: '1',
            data: [
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, 0,
                1, 60, 60,
                60, 60, 60,
                60, 60, 60,
                60, 1, 0,
                null, null, null,
                null, null, null,
                null, null, null
                  ],
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }],
        plotOptions: {
            series: {
                allowPointSelect: false
            },
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        title: {
            text: ''
        },
        loading: false
    };
    
    $scope.sectionChannel_1 = true;
    $scope.sectionChannel_2 = false;
    
    $scope.redirectToHome=function(){
        $location.path('/');
    }
    
    $scope.showHideElement=function(sectionShow,sectionHide) {
        $scope[sectionShow] = true;
        $scope[sectionHide] = false; 
    }
    
});
