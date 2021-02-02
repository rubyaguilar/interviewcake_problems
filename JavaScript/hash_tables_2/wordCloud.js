class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  isLetter(character) {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
  }

  /**
   * Return array with only words (removed) 
   * @param {*} string 
   */
  splitWords(string){
    let arr = [...string]

    for(let i = 1; i < arr.length; i++){
      let first = arr[i-1].to
      let current = arr[i]
      let next = arr[i+1]
      if( !this.isLetter(first) && !this.isLetter(current) && !this.isLetter(next)  ){
        //I am making the rule that if first, middle, last not character, we remove the middle one 
        arr.splice(i,1)
      }
    }

    return arr.join("").split(" ");
  }

  populateWordsToCounts(inputString) {
    
    const string = this.splitWords(inputString); //return string of only letters 

    string.forEach(word => {
      if(!this.wordsToCounts.has(word)) { //does not contain word 
        this.wordsToCounts.set(word, 1) //set the word
      } else { //the word does exist 
        let count = this.wordsToCounts.get(word)
        count++ //increment the count 
        this.wordsToCounts.set(word, count)
      }
    });
  }


  }
  

console.log(new WordCloudData('Dessert - mille-feuille cake').wordsToCounts);