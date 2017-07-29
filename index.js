var columns = ["date", "callerid", "employeeid", "duration", "timeTalk", "status"];
const mostCommon = require('most-common');
const sortJsonArray = require('sort-json-array');
var times = [];
var callers = [];
var relashin = [];
var mostP = [];
var leastP = [];
var array2 = [];
var array3 =[];
require("csv-to-array")({
   file: "./data.csv",
   columns: columns
 // unique(arr)
}, function (err, array) {
        array2 = array;
        sortJsonArray(array, 'callerid', 'des');

        for( i=0 ; i< array.length -1 ; i ++){
            let k = i
            if(array2[i].callerid == array2[k+1].callerid){
                array2[k+1].timeTalk == parseInt(array2[k+1].timeTalk) + parseInt(array2[i].timeTalk);
                array2[i].timeTalk = 0;
            }
            times.push(array[i].date[0] + array[i].date[1] + array[i].date[2] + array[i].date[3] + array[i].date[4] + array[i].date[5] + array[i].date[6] + array[i].date[8] + array[i].date[7] + array[i].date[8] + array[i].date[9] + array[i].date[10] + array[i].date[11] + array[i].date[12] + array[i].date[13] + array[i].date[14] + array[i].date[15]);
            relashin.push(array[i].callerid + array[i].employeeid);       
            callers.push(array[i].callerid);
            if(array[i].status === "ANSWERED"){
                mostP.push(array[i].employeeid + array[i].status);            
            }else{
                leastP.push(array[i].employeeid + " didnt answerd");            
            }
        }
        for( i=0 ; i< array2.length -1 ; i ++){
            if(array2[i].timeTalk != 0){
                array3.push(array2[i]);
            }
        }
        let max = array3[0].timeTalk
        let u = 0 ;
      for( i=0 ; i< array3.length -1 ; i ++){
         if(array3[i].timeTalk > max ){
             max = array3[i].timeTalk;
             u = i ;
         }
        }

    console.log('the peak minute');
    console.log(mostCommon(times, 1));
    ///////
    console.log('the most frequent calls');
    console.log(mostCommon(callers, 1));
    ///////
    console.log('the relashin is between');
    console.log(mostCommon(relashin, 1));
    ///////
    console.log('the most productive employee');
    console.log(mostCommon(mostP, 1));
    //////
    console.log('the least productive employee');
    console.log(mostCommon(leastP, 1));
    ////////
    console.log('mAX is ');
    console.log(array3[u].callerid , max);
    
});
