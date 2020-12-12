
function sortStartTimes(times){
  var isSorted = false; 
  
  while(!isSorted){
    for(i = 0; i < times.length-1; i++){
      isSorted = true 
      if(times[i].startTime > times[i+1].startTime){
        temp = times[i]
        times[i] = times[i+1]
        times[i+1] = temp
        isSorted = false 
      }
    }
  }
  
  return times; 
}

function mergeRanges(meetings){     
    sorted = sortStartTimes(meetings) 
    //what does this mean for the edge case: range exist inside each other, how do we check for this 
    var i = 0; 
    while(i < sorted.length-1){
      if(sorted[i].endTime >= sorted[i+1].startTime) { 
        if(sorted[i].endTime >= sorted[i+1].endTime){
          sorted.splice(i+1, 1) //remove inner overrlap 
        } else if (sorted[i].endTime < sorted[i+1].endTime){
          sorted[i].endTime = sorted[i+1].endTime
          sorted.splice(i+1,1) //overlap overlap merge 
          //don't advance bc need to check for more afterwards 
        } else {
          i++;
        }
      } else {
        i++; //no issues, keep going
      }
    }
      

    /**
     * This will run nlog(n), with sort
     */
    return meetings;
  }


let timesArr =   [
  { startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }
]

console.log(mergeRanges(timesArr))