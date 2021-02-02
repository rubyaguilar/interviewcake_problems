
function removeConsecutive(word, k){
    var i; 
    for(i = 0; i < word.length-1; i++){
        if(word[i] === word[i+1]){
            var start = i; 
            var length = 1; //if there is a match, we know it is 1 atleast
            while(word[i] === word[i+1] && i !== word.length && i !== k+1){
                i++
                length = length+1
            }
            word.splice(start,length)
        }
    }
    return word
}

function compressWord(word, k) {
    word = word.split("")
    word = word.sort()
    var consecutiveExists = false; 
    while(!consecutiveExists){
        consecutiveExists = true; 
        word = removeConsecutive(word, k)
        //check again 
        for(let i = 0; i < word.length; i++){
            if(word[i] === word[i+1]){
                consecutiveExists = false 
            }
        }
    }

    return word.toString(); 
}


console.log(compressWord("abbcccb", 2));