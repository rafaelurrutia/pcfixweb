pcfixwebApp.controller('speedtestController', function ($scope, $http, $location) {

    $scope.ctrl = "speedtestController";
    
    $scope.repairSectionClass = "index_box";
    $scope.repairSectionClassHead = "index_repairDisableHead index_boxClicked";

    $scope.channelSectionClass = "index_box";
    $scope.channelSectionClassHead = "index_channelDisableHead index_boxClicked";

    $scope.intrudersSectionClass = "index_box";
    $scope.intrudersSectionClassHead = "index_intrudersDisableHead index_boxClicked";

    $scope.speedtestSectionClass = "index_box";
    $scope.speedtestSectionClassHead = "index_speedtestEnableHead";

    $scope.chatSectionClass = "index_box";
    $scope.chatSectionClassHead = "index_chatDisableHead index_boxClicked";

    $scope.home = function () {
        $location.path('/');
    }
    
    $scope.sectionSpeedtest_1=true;
    $scope.sectionSpeedtest_2=false;
    
    $scope.showHideElement=function(sectionShow,sectionHide) {
        $scope[sectionShow] = true;
        $scope[sectionHide] = false; 
    }
    /*
    var myIframe = document.getElementById('iframe');
    myIframe.onload = function(){
        myIframe.contentWindow.scrollTo(50,10);
    };
    */
    
    var flashvar = {};
    var params = {bgcolor: "#ffffff", allowScriptAccess: "always"};
    var attrs = {};

    swfobject.embedSWF("http://c.speedtest.net/flash/speedtest.swf?v=339384", "mySpeedtest", "728", "450", "10.0.0", "flash/expressInstall.swf", flashvar, params, attrs);
		
    
});
