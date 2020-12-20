



function reverse(arrayOfChars) {

    arrayOfChars.split("")

    if(arrayOfChars.length === 0 ){ //empty string 
        return arrayOfChars
    } else {
        var L = 0; //left most 
        var R = arrayOfChars.length-1; 

        while ( L !== Math.floor( (arrayOfChars.length-1) / 2) )  { 
            var tempLeft = arrayOfChars[L]
            arrayOfChars[L] = arrayOfChars[R]
            arrayOfChars[R] = tempLeft
            L++
            R--
        }
    }
    
    return arrayOfChars 
}
  

console.log(reverse("ABCDE"))