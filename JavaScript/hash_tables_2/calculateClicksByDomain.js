




function calculateClicksByDomain(counts){
    let myMap = new Map()
    var allDomains = []

    //filling allDomains and setting to myMap 
    for(let i = 0; i < counts.length; i++){
        var string = counts[i].split(",")
        var count = string[0]
        var domain = string[1]
        allDomains[i] = domain //just for debugging 

        myMap.set(domain, count)
    }        

    //add subdomains 
    myMap.forEach((value, key) => {
        var periodSplit = key.split(".")
        var i = periodSplit.length-1; //length of split 
        while(i >= 0){
            if(i === periodSplit.length-1){ //get the parent domain 
                var rightMostDomain = periodSplit[i] 
                if(!myMap.has(rightMostDomain)){ //if doesn't exist, add
                    myMap.set(rightMostDomain, value)
                } 
                i--
            } else {
                var currentDomain = periodSplit[i] 
                currentDomain = currentDomain.concat('.' + rightMostDomain)

                if(!myMap.has(currentDomain)){ //if doesn't exist, add
                    myMap.set(currentDomain, value)
                } 
                i--
                rightMostDomain = currentDomain
            }
        } 
    });

}

counts = [
    "900,google.com", 
    "60,mail.yahoo.com", 
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com", 
    "300,yahoo.com", 
    "10,stackoverflow.com", 
    "20,overflow.com", 
    "5,com.com", 
    "2,en.wikipedia.org", 
    "1,m.wikipedia.org", 
    "1,mobile.sports", 
    "1,google.co.uk" 
]

calculateClicksByDomain(counts)