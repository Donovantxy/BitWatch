/**
 * Created by Fulvio Cosco on 06/12/2014.
 */

angular.module("app", [])
       .controller("BitWatch", BitWatch)
       .factory("bitTime", bitTime);


function BitWatch($scope){
    var self = this;
    self.watch = bitTime();
    //console.log(self, bt());
    console.log(this, $scope);
}


function bitTime(){
    var bitT = {}
    var date = new Date();

    var hours = date.getHours().toString(2);
    bitT.hours = hours.length<4 ? "0000".substr(hours.length)+hours : hours;

    var mins = date.getMinutes().toString(2);
    bitT.mins = mins.length<6 ? "000000".substr(mins.length)+mins : mins;

    var secs = date.getSeconds().toString(2);
    bitT.secs = secs.length<6 ? "000000".substr(secs.length)+secs : secs;

    bitT.update = $setInterval(function(){

    }, 1000);

    return bitT; 
}