

function isPrime(value){
    for (let i = 2; i < value; i++){
        if (value % i == 0)
            return false;
    }
    
    return true
}

function primeNumbers(n){
    for(let i = 2; i <= n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

primeNumbers(25)