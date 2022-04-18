// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function checkIfCharIsUnique(str){
    let arr = str.split('');
    let uniq = ""

    for(let char of arr){
      if(uniq.includes(char)){return false}
      uniq += char
    }

    return true
  }
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    let result = []
    const inputArray = input.split('')


    if(!alphabet || alphabet.length !== 26 || !checkIfCharIsUnique(alphabet)){return false}
    if(encode){
      alphabet = alphabet.split('')
      let cipher = {}
      for(let i = 0; i<26; i++){
        cipher[standardAlphabet[i]] = alphabet[i]
      }

      for(let letter of inputArray){
        if(letter === " "){result.push(" ")}
        for(let key in cipher){
          if(key === letter){
            result.push(cipher[key])
          }
        }
      }
    }
    else{
      alphabet = alphabet.split('')
      let cipher = {}
      for(let i = 0; i<26; i++){
        cipher[standardAlphabet[i]] = alphabet[i]
      }

      for(let letter of inputArray){
        if(letter === " "){result.push(" ")}
        for(let key in cipher){
          if(cipher[key] === letter){
            result.push(key)
          }
        }
      }
    }
    return result.join('')
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
