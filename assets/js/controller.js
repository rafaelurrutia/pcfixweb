pcfixwebApp.controller('httpController',function($scope,$location){

//    $scope.$on('LOAD',function(){$scope.loading=true});
//    $scope.$on('UNLOAD',function(){$scope.loading=false});
    
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
});

