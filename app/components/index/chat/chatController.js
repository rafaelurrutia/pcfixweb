pcfixwebApp.controller('chatController', function ($scope, $http,$location) {
    
    $scope.ctrl = "chatController";

    $scope.repairSectionClass = "index_box";
    $scope.repairSectionClassHead = "index_repairDisableHead index_boxClicked";

    $scope.channelSectionClass = "index_box";
    $scope.channelSectionClassHead = "index_channelDisableHead index_boxClicked";

    $scope.intrudersSectionClass = "index_box";
    $scope.intrudersSectionClassHead = "index_intrudersDisableHead index_boxClicked";

    $scope.speedtestSectionClass = "index_box";
    $scope.speedtestSectionClassHead = "index_speedtestDisableHead index_boxClicked";

    $scope.chatSectionClass = "index_box";
    $scope.chatSectionClassHead = "index_chatEnableHead";

    $scope.chatDataTable = [
        {
            name: 'Eduardo Casas',
            date: '07/04/2015'
        },
        {
            name: 'Fernando Silva',
            date: '02/05/2015'
        },
        {
            name: 'Eduardo Casas',
            date: '07/05/2015'
        },
        {
            name: 'Eduardo Casas',
            date: '10/04/2015'
        },
        {
            name: 'Eduardo Casas',
            date: '11/04/2015'
        },
        {
            name: 'Eduardo Casas',
            date: '17/04/2015'
        },
        {
            name: 'Eduardo Casas',
            date: '27/04/2015'
        },
        {
            name: 'Eduardo Casas',
            date: '07/04/2015'
        }
    ];
    
    $scope.sectionChat_1=true;
    $scope.sectionChat_2=false;
    $scope.sectionChat_3=false;
    
//    $scope.hideChat_dialogmsg1=true;
    $scope.showHideElement=function(sectionShow,sectionHide) {
        $scope[sectionShow] = true;
        $scope[sectionHide] = false; 
    }
    
    $scope.home = function () {
        $location.path('/');
    }
});
