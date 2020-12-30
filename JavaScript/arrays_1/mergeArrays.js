
function mergeArrays(myArray, alicesArray) {
    var alicesIndex = 0; 
    var myIndex = 0; 

    var merged = []
    var mergedIndex = 0; 

    if(myArray.length > 0 && alicesArray.length > 0) { //both arrays greater than 0 
        while(mergedIndex < (myArray.length + alicesArray.length)){
            var alicesCurrentVal = alicesArray[alicesIndex]
            var myCurrentval = myArray[myIndex]

            if(alicesIndex < alicesArray.length && myIndex < myArray.length){
                if(myCurrentval < alicesCurrentVal){
                    merged[mergedIndex] = myCurrentval;
                    myIndex++
                } else {
                    merged[mergedIndex] = alicesCurrentVal
                    alicesIndex++
                }
                mergedIndex++;
            } else {
                //we have reached the end of an array 
                if(myIndex === myArray.length){
                    while(alicesIndex !== alicesArray.length){
                        merged[mergedIndex] = alicesArray[alicesIndex]
                        mergedIndex++
                        alicesIndex++
                    }
                    return merged; 
                } else {
                    while(myIndex !== myArray.length){
                        merged[mergedIndex] = myArray[myIndex]
                        mergedIndex++
                        myIndex++
                    }
                    return merged; 
                }
            }
            
        }
    } else {
        if(myArray.length > alicesArray.length){
            return myArray
        } else {
            return alicesArray
        }
    }

    return merged;
}
const myArray = [2, 4, 6, 8];
const alicesArray = [1, 7];

console.log(mergeArrays(myArray, alicesArray));