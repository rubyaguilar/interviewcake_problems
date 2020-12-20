
function reverse(message) { //character reverse

    var L = 0
    var R = message.length-1

    while( L != Math.floor(message.length/2) ) {
        var temp = message[L]
        message[L] = message[R]
        message[R] = temp; 
        L++
        R--
    }

    return message
  } 


function wordReversal(message){
    var i;
    for(i = 0; i < message.length; i++){
        if( message[i] !== ' ' ){
            var start = i; //the starting positon for inserting 
            while(message[i] !== " " && i !== message.length ){  
                i++ //this is incremented as a global reference 
                var wordLength = i - start; 
            } 
        }
        var word = message.splice(start, wordLength)
        message.splice(start, 0, ...reverse(word))
    }
    return message;
}

function reverseWords(message) {
    reverse(message) //reverse all the characters
    wordReversal(message) //reverse each word 

    return message
}


  message = 'rat the ate cat the'.split('');
  console.log(reverseWords(message))