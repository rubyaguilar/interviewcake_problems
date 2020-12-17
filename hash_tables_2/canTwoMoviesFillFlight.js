



function canTwoMoviesFillFlightSlow(movieLengths, flightLength) {
    movieLengths.sort()
    if(movieLengths[0] > flightLength && movieLengths.length === 0){
        return false; //we at least have one movie 
    }
    else {
        var firstMovie = movieLengths[0]
        var timeLeft = flightLength - firstMovie 
        if(timeLeft <= 0){
            return false; //no time for another movie 
        }
        else {
            for(i = 0; i < movieLengths.length; i++){
                if(movieLengths[i] <= timeLeft){
                    return true; 
                }
            }
        }
    }
    return false; 
  }
  
  function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const moviesSeen= new Set()
    
    for(let i = 0; i < movieLengths.length; i++){
      const firstMovie = movieLengths[i]
      
      const matchingSecondMovie = flightLength - firstMovie 
      if(moviesSeen.has(matchingSecondMovie)){
        return true; 
      }
      
      moviesSeen.add(firstMovie) //
    }
    
    return false
  }
  

  
  
  
  canTwoMoviesFillFlight([3,8,3], 6)
  
  
  
  
  

  
