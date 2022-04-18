// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let grid = {a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g:22, h:32, j: 42, i:42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, v:15, w:25, x: 35, y: 45, z: 55 }
  function polybius(input, encode = true) {
    // your solution code here
    
    let arrayOfResult = []
    const keys = Object.keys(grid)
    if(encode){
      input = input.toLowerCase()
       let arrayOfinput = input.split('')
      for(let item of arrayOfinput){
        if(! keys.includes(item) ){arrayOfResult.push(item)}
        for(let key in grid){
          if(key === item){arrayOfResult.push(grid[key])}
        }
      }
    }
    else{
      let i = 0;
      let arrayOfinput = [];
      let counter = 0;
      
      for(let char of input){
        if(char !== " "){counter += 1}
      }
      if(counter%2 !== 0){return false}

      while(i<=input.length-2){
        if(input[i] == " "){arrayOfinput.push(input[i]); i=i+1}
        else{arrayOfinput.push(input[i]+input[i+1]); i = i+2}
      }
      
      
      for(let item of arrayOfinput){
        if( item == " " ){arrayOfResult.push(item)}
        if(item == 42){arrayOfResult.push("(i/j)")}

        for(let key in grid){
          if(item != 42 && grid[key] == item){arrayOfResult.push(key)}
        }
      }
    }
    return arrayOfResult.join('')
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
