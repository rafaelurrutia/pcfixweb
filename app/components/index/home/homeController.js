pcfixwebApp.controller('mainController', function($scope,$http,getlanguageService,internetService,connectionVTRService) {
    
    //alert("hola");
//    $scope.class = "index_repairHead";
//    $scope.myStyle={"background-color":"#123985"};
        
    $scope.gotoRepair = function() {
        location.href=urlRepair;
    }
    
    $scope.gotoChannel = function() {
        location.href=urlChannel;
    }
    
    $scope.gotoIntruders = function() {
        location.href=urlIntruders;
    }
    
    $scope.gotoSpeedtest = function() {
        location.href=urlSpeedtest;
    }
    
    $scope.gotoChat = function() {
        location.href=urlChat;
    }
    
    $scope.hideModalBy = function(mensaje) {
        $scope.main= "";
        $scope[mensaje]=false;
    }

    getlanguageService.getLanguageText($scope,viewTextSource)
    .then(function (data) {
        getlanguageService.clearLanguageText(data);
        var value=data.data.data[0];
        getlanguageService.assignViewsLanguageText($scope,value);
    },function (error) {
        console.error(error);
    });
    
    
    internetService.internet($scope,internetSource)
    .then(function (data) {
        var value=data.data.data[0];
        if(value.internet=="true"){
            
            console.log("estoy conectado a internet");
            
            $scope.channelClass = "index_box";
            $scope.channelClassHead = "index_boxClicked index_channelEnableHead";
            $scope.channelClassContent = "index_Content index_boxClicked index_channelEnable";
            
            $scope.intrudersClass = "index_box";
            $scope.intrudersClassHead = "index_boxClicked index_intrudersEnableHead";
            $scope.intrudersClassContent = "index_Content index_boxClicked index_intrudersEnable";
            
            $scope.speedtestClass = "index_box";
            $scope.speedtestClassHead = "index_boxClicked index_speedtestEnableHead";
            $scope.speedtestClassContent = "index_Content index_boxClicked index_speedtestEnable";
            
            $scope.chatClass = "index_box";
            $scope.chatClassHead = "index_boxClicked index_chatEnableHead";
            $scope.chatClassContent = "index_Content index_boxClicked index_chatEnable";
//            var mainHtml=angular.element(document.querySelector('#main'));
//            var mainHtml1=document.getElementById('main');
            
//            index_repairHead 
//            .index_repairEnable
//            console.log(mainHtml1);
            $scope.onViewLoad = function(){
                $scope.enableOptions=true;
            };
            
            $scope.main= "";
            $scope.hideRepair_dialogmsg1=false;
        }else{
            $scope.enableOptions=false;
            
            $scope.channelClass = "index_box";
            $scope.channelClassHead = "index_channelDisableHead";
            $scope.channelClassContent = "index_Content index_channelDisable";
            
            $scope.intrudersClass = "index_box";
            $scope.intrudersClassHead = "index_intrudersDisableHead";
            $scope.intrudersClassContent = "index_Content index_intrudersDisable";
            
            $scope.speedtestClass = "index_box";
            $scope.speedtestClassHead = "index_speedtestDisableHead";
            $scope.speedtestClassContent = "index_Content index_speedtestDisable";
            
            $scope.chatClass = "index_box";
            $scope.chatClassHead = "index_chatDisableHead";
            $scope.chatClassContent = "index_Content index_chatDisable";
            
            $scope.main= "main";
            $scope.hideRepair_dialogmsg1=true;
        }
    },function (error) {
        console.error(error);
    });
    
    connectionVTRService.connectionVTR($scope,connectionVTRSource)
    .then(function (data) {
        var value=data.data.data[0];
        if(value.vtr=="true"){
            console.log("estoy conectado a VTR");
            
            $scope.channelClass = "index_box";
            $scope.channelClassHead = "index_boxClicked index_channelEnableHead";
            $scope.channelClassContent = "index_Content index_boxClicked index_channelEnable";
            
            $scope.intrudersClass = "index_box";
            $scope.intrudersClassHead = "index_boxClicked index_intrudersEnableHead";
            $scope.intrudersClassContent = "index_Content index_boxClicked index_intrudersEnable";
            
            $scope.speedtestClass = "index_box";
            $scope.speedtestClassHead = "index_boxClicked index_speedtestEnableHead";
            $scope.speedtestClassContent = "index_Content index_boxClicked index_speedtestEnable";
            
            $scope.chatClass = "index_box";
            $scope.chatClassHead = "index_boxClicked index_chatEnableHead";
            $scope.chatClassContent = "index_Content index_boxClicked index_chatEnable";
        }else{
            $scope.enableOptions=false;            
            
            $scope.channelClass = "index_box";
            $scope.channelClassHead = "index_channelDisableHead";
            $scope.channelClassContent = "index_Content index_channelDisable";
            
            $scope.intrudersClass = "index_box";
            $scope.intrudersClassHead = "index_intrudersDisableHead";
            $scope.intrudersClassContent = "index_Content index_intrudersDisable";
            
            $scope.speedtestClass = "index_box";
            $scope.speedtestClassHead = "index_speedtestDisableHead";
            $scope.speedtestClassContent = "index_Content index_speedtestDisable";
            
            $scope.chatClass = "index_box";
            $scope.chatClassHead = "index_chatDisableHead";
            $scope.chatClassContent = "index_Content index_chatDisable";
        }
    },function (error) {
        console.error(error);
    });
    
         
});
