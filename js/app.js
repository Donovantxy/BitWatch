/**
 * Created by Fulvio Cosco on 06/12/2014.
 */

angular.module("app", [])
       .controller("BitWatch", ["$scope", "$interval", BitWatch])
       .service("bitTime", bitTime);


function BitWatch($scope, $interval){
    var self = this;
    self.watch = new bitTime();
    $scope.secs = self.watch.secs;
    $scope.$watch( "secs",
        function(){
            self.watch.update();
            $scope.secs = self.watch.secs;
            //console.log("chaged", self.watch.secs, $scope.secs);
        }
    );

    $interval( function(){ self.watch.update(); $scope.secs = self.watch.secs; }, 1000 );

}


function bitTime(){
    var date = new Date();
    var self = this;

    var hours = date.getHours().toString(2);
    self.hours = hours.length<5 ? "00000".substr(hours.length)+hours : hours;

    var mins = date.getMinutes().toString(2);
    self.mins = mins.length<6 ? "000000".substr(mins.length)+mins : mins;

    var secs = date.getSeconds().toString(2);
    self.secs = secs.length<6 ? "000000".substr(secs.length)+secs : secs;

    //return self;

    self.update = function(){
        var date_updated = new Date();

        hours = date_updated.getHours().toString(2);
        self.hours = hours.length<5 ? "00000".substr(hours.length)+hours : hours;

        var mins = date_updated.getMinutes().toString(2);
        self.mins = mins.length<6 ? "000000".substr(mins.length)+mins : mins;

        var secs = date_updated.getSeconds().toString(2);
        self.secs = secs.length<6 ? "000000".substr(secs.length)+secs : secs;
    }

}