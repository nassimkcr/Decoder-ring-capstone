// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('');
 
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift > 25 || shift < -25){return false}
    input = input.toLowerCase();
    let arrayOfInput = input.split('')
    let arrayOfResult = [];
    let j;
    let startJ;
    let endJ
    
    
     if(encode){
        for(let i=0; i < arrayOfInput.length; i++){
          const letter = arrayOfInput[i]
          
          if(shift > 0){startJ=0; endJ=26}
          else{startJ=26; endJ=52}
          
          if(!alphabet.includes(letter)){arrayOfResult.push(letter)}
         
          for(j=startJ; j< endJ; j++){
            if(alphabet[j]=== letter){arrayOfResult.push(alphabet[j+shift])}
          }
        }
    }
    else{
      for(let i=0; i < arrayOfInput.length; i++){
        const letter = arrayOfInput[i]
        
        if(shift < 0){startJ=0; endJ=26}
        else{startJ=26; endJ=52}
        
        if(!alphabet.includes(letter)){arrayOfResult.push(letter)}
        
        for(j=startJ; j< endJ; j++){
          if(alphabet[j]=== letter){arrayOfResult.push(alphabet[j-shift])}
        }
      }
    }
    return arrayOfResult.join('')

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
