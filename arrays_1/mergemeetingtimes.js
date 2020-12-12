
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
    var i = 0; 
    while(i < sorted.length-1){
      if(sorted[i].endTime >= sorted[i+1].startTime) { //the base case for an overrlap 
        if(sorted[i].endTime >= sorted[i+1].endTime){ //remove inner overrlap 
          sorted.splice(i+1, 1) 
        } else if (sorted[i].endTime < sorted[i+1].endTime){ //remove outside overlap  
          sorted[i].endTime = sorted[i+1].endTime
          sorted.splice(i+1,1) 
        } else {
          i++;
        }
      } else {
        i++; //no base issues, keep going
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