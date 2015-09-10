pcfixwebApp.service("getlanguageService", function ($http, $q) {

    this.getLanguageText = function ($scope, viewTextSource) {
        var deferred = $q.defer();
        $http.get(viewTextSource).then(function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.clearLanguageText = function (data) {

        var value = data.data.data[0];

        var lookup = [];
        var i = 0;

        for (var name in value) {
            if (value.hasOwnProperty(name)) {
                value[name] = doReplace(value[name]);
                value[name] = value[name].replace("Â", "");
                value[name] = value[name].replace(" Â", " ");
                i++;
            }
        }

        return value;
    };

    this.assignViewsLanguageText = function ($scope, value) {

        $scope.channel_buttonchannelsuggested = value.channel_buttonchannelsuggested;
        $scope.global_buttonview5ghz = value.global_buttonview5ghz;
        $scope.channel_description = value.channel_description;
        $scope.channel_diagboxchannelsuggested = value.channel_diagboxchannelsuggested;
        $scope.channel_diagboxcurrentchannel = value.channel_diagboxcurrentchannel;
        $scope.channel_diagboxmsgchangechannel = value.channel_diagboxmsgchangechannel;
        $scope.channel_diagboxrut = value.channel_diagboxrut;
        $scope.channel_frequencychannel = value.channel_frequencychannel;
        $scope.channel_graphicautentication = value.channel_graphicautentication;
        $scope.channel_graphicch = value.channel_graphicch;
        $scope.channel_graphichours = value.channel_graphichours;
        $scope.channel_graphicmac = value.channel_graphicmac;
        $scope.channel_graphicrssi = value.channel_graphicrssi;
        $scope.channel_graphicsignal = value.channel_graphicsignal;
        $scope.channel_graphicssid = value.channel_graphicssid;
        $scope.channel_title = value.channel_title;
        $scope.chat_chatwithadviser = value.chat_chatwithadviser;
        $scope.chat_conditionofuse = value.chat_conditionofuse;
        $scope.chat_dateofchat = value.chat_dateofchat;
        $scope.chat_description = value.chat_description;
        $scope.chat_titlestep = value.chat_titlestep;
        $scope.global_buttongobackhistorical = value.global_buttongobackhistorical;
        $scope.chat_nameadviser = value.chat_nameadviser;
        $scope.chat_schedule = value.chat_schedule;
        $scope.chat_sendchatmail = value.chat_sendchatmail;
        $scope.chat_title = value.chat_title;
        $scope.chat_titlehistorical = value.chat_titlehistorical;
        $scope.chat_viewchat = value.chat_viewchat;
        $scope.global_buttonviewhistorical = value.global_buttonviewhistorical;
        $scope.global_buttonchatadvisor = value.global_buttonchatadvisor;
        $scope.global_buttonacceptterms = value.global_buttonacceptterms;
        $scope.global_buttonbegin = value.global_buttonbegin;
        $scope.global_buttonbeginscan = value.global_buttonbeginscan;
        $scope.global_buttoncancel = value.global_buttoncancel;
        $scope.global_buttoncontinue = value.global_buttoncontinue;
        $scope.global_buttondotest = value.global_buttondotest;
        $scope.global_buttongotobegin = value.global_buttongotobegin;
        $scope.global_diagboxbuttoncancel = value.global_diagboxbuttoncancel;
        $scope.global_diagboxbuttonchangechannel = value.global_diagboxbuttonchangechannel;
        $scope.global_diagboxbuttongotobegin = value.global_diagboxbuttongotobegin;
        $scope.global_dialogboxbuttonaccept = value.global_dialogboxbuttonaccept;
        $scope.global_dialogboxbuttoncontinuereview = value.global_dialogboxbuttoncontinuereview;
        $scope.index_title = value.index_title;
        $scope.index_titlevtr = value.index_titlevtr;
        $scope.index_description = value.index_description;
        $scope.index_intruction = value.index_intruction;
        $scope.index_titlestep1 = value.index_titlestep1;
        $scope.index_titlestep2 = value.index_titlestep2;
        $scope.index_titlestep3 = value.index_titlestep3;
        $scope.index_titlestep4 = value.index_titlestep4;
        $scope.index_titlestep5 = value.index_titlestep5;
        $scope.index_titlerepair = value.index_titlerepair;
        $scope.index_repairdescription = value.index_repairdescription;
        $scope.index_titlechannel = value.index_titlechannel;
        $scope.index_channeldescription = value.index_channeldescription;
        $scope.index_titleintruders = value.index_titleintruders;
        $scope.index_intrudersdescription = value.index_intrudersdescription;
        $scope.index_titlespeedtest = value.index_titlespeedtest;
        $scope.index_speedtestdescription = value.index_speedtestdescription;
        $scope.index_titlechat = value.index_titlechat;
        $scope.index_chatdescription = value.index_chatdescription;
        $scope.index_menutitleindex = value.index_menutitleindex;
        $scope.index_menutitlewifi = value.index_menutitlewifi;
        $scope.index_menutitleinfo = value.index_menutitleinfo;

        $scope.intruders_description = value.intruders_description;
        $scope.intruders_devices = value.intruders_devices;
        $scope.intruders_founded = value.intruders_founded;
        $scope.intruders_nameequipment = value.intruders_nameequipment;
        $scope.intruders_thereareintruders = value.intruders_thereareintruders;
        $scope.intruders_title = value.intruders_title;
        $scope.intruders_ipaddress = value.intruders_ipaddress;
        $scope.intruders_ipmac = value.intruders_ipmac;
        $scope.intruders_namemanufacturer = value.intruders_namemanufacturer;
        $scope.intruders_finddevices = value.intruders_finddevices;

        $scope.repair_browserprobe1 = value.repair_browserprobe1;
        $scope.repair_browserprobe2 = value.repair_browserprobe2;
        $scope.repair_browserprobe3 = value.repair_browserprobe3;
        $scope.repair_browserprobe4 = value.repair_browserprobe4;
        $scope.repair_browserprobe5 = value.repair_browserprobe5;
        $scope.repair_browserprobe6 = value.repair_browserprobe6;
        $scope.repair_browsersolution1 = value.repair_browsersolution1;
        $scope.repair_browsersolution2 = value.repair_browsersolution2;
        $scope.repair_browsersolution3 = value.repair_browsersolution3;
        $scope.repair_checkboxrepareall = value.repair_checkboxrepareall;
        $scope.repair_description = value.repair_description;
        $scope.repair_dialogboxdescription = value.repair_dialogboxdescription;
        $scope.repair_dialogmsg1 = value.repair_dialogmsg1;
        $scope.repair_dialogmsg2 = value.repair_dialogmsg2;

        $scope.repair_gotobegin = value.repair_gotobegin;
        $scope.repair_networkprobe1 = value.repair_networkprobe1;
        $scope.repair_networkprobe2 = value.repair_networkprobe2;
        $scope.repair_networkprobe3 = value.repair_networkprobe3;
        $scope.repair_networkprobe4 = value.repair_networkprobe4;
        $scope.repair_networkprobe5 = value.repair_networkprobe5;
        $scope.repair_networkprobe6 = value.repair_networkprobe6;
        $scope.repair_networksolution1 = value.repair_networksolution1;
        $scope.repair_networksolution2 = value.repair_networksolution2;
        $scope.repair_networksolution3 = value.repair_networksolution3;
        $scope.repair_progressbarfinalize = value.repair_progressbarfinalize;
        $scope.repair_progressbarproccess = value.repair_progressbarproccess;

        $scope.repair_repairproblem = value.repair_repairproblem;
        $scope.repair_securityprobe1 = value.repair_securityprobe1;
        $scope.repair_securityprobe2 = value.repair_securityprobe2;
        $scope.repair_securityprobe3 = value.repair_securityprobe3;
        $scope.repair_securitysolutionmessage = value.repair_securitysolutionmessage;
        $scope.repair_title = value.repair_title;
        $scope.repair_titleprobebrowser = value.repair_titleprobebrowser;
        $scope.repair_titleprobenetwork = value.repair_titleprobenetwork;
        $scope.repair_titleprobesecurity = value.repair_titleprobesecurity;

        $scope.speedtest_description = value.speedtest_description;
        $scope.speedtest_step = value.speedtest_step;
        $scope.speedtest_step1 = value.speedtest_step1;
        $scope.speedtest_step2 = value.speedtest_step2;
        $scope.speedtest_step3 = value.speedtest_step3;
        $scope.speedtest_step4 = value.speedtest_step4;
        $scope.speedtest_title = value.speedtest_title;
        $scope.speedtest_titlestep = value.speedtest_titlestep;
        $scope.repair_antivirusnoinstall = value.repair_antivirusnoinstall;
        $scope.repair_antivirusfinish = value.repair_antivirusfinish;
        $scope.repair_firewallnoactivate = value.repair_firewallnoactivate;
        $scope.repair_firewallnodetermined = value.repair_firewallnodetermined;
        $scope.repair_withoutproblem = value.repair_withoutproblem;
        $scope.wifi_title = value.wifi_title;
        $scope.wifi_namenet = value.wifi_namenet;
        $scope.wifi_securitywifi = value.wifi_securitywifi;
        $scope.wifi_intensitysignal = value.wifi_intensitysignal;
        $scope.wifi_channelwifi = value.wifi_channelwifi;
        $scope.wifi_password = value.wifi_password;
        $scope.wifi_advert = value.wifi_advert;
        $scope.wifi_dialogboxmsgrut = value.wifi_dialogboxmsgrut;
        $scope.wifi_dialogboxmsgerrorrut = value.wifi_dialogboxmsgerrorrut;
        $scope.wifi_changename = value.wifi_changename;
        $scope.wifi_newname = value.wifi_newname;
        $scope.wifi_labeledit = value.wifi_labeledit;
        $scope.wifi_labelviewchannel = value.wifi_labelviewchannel;
        $scope.wifi_labelchange = value.wifi_labelchange;
        $scope.wifi_labelrecovery = value.wifi_labelrecovery;
        $scope.wifi_mailrecovery = value.wifi_mailrecovery;
        $scope.wifi_errormailrecovery = value.wifi_errormailrecovery;
        $scope.global_buttonsendmail = value.global_buttonsendmail;

        $scope.info_title = value.info_title;
        $scope.info_titleso = value.info_titleso;
        $scope.info_cardnet = value.info_cardnet;
        $scope.info_security = value.info_security;
        $scope.info_firewallactivate = value.info_firewallactivate;
        $scope.info_viewstatusantivirus = value.info_viewstatusantivirus;
        $scope.info_iphardware = value.info_iphardware;
        $scope.info_dialogboxtitlecardnet = value.info_dialogboxtitlecardnet;
        $scope.info_dialogboxtitleantivirus = value.info_dialogboxtitleantivirus;
        $scope.info_dialogboxnameantivirus = value.info_dialogboxnameantivirus;
        $scope.info_dialogboxstate = value.info_dialogboxstate;
        $scope.global_buttonview2_4ghz = value.global_buttonview2_4ghz;
        $scope.global_buttonchannelsuggested = value.global_buttonchannelsuggested;
        $scope.global_buttoncancelar = value.global_buttoncancelar;
        $scope.global_buttonchange = value.global_buttonchange;

        $scope.global_buttonbacktotop = value.global_buttonbacktotop;
        $scope.info_seeeverything = value.info_seeeverything;
        $scope.info_firewalloff = value.info_firewalloff;
        $scope.info_wirelessnetworkconnection = value.info_wirelessnetworkconnection;
        $scope.info_IPv4 = value.info_IPv4;
        $scope.info_gateway = value.info_gateway;
        $scope.info_IPv6 = value.info_IPv6;
        $scope.info_dialogboxactivated = value.info_dialogboxactivated;
        $scope.info_dialogboxoff = value.info_dialogboxoff;
        $scope.info_dialogboxupdated = value.info_dialogboxupdated;
        $scope.info_dialogboxoutdated = value.info_dialogboxoutdated;
        
        $scope.global_buttonsendchatmail = value.global_buttonsendchatmail;
        

        return true;
    }

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
