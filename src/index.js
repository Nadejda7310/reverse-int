module.exports = function reverse (n) {
  let strN = n.toString()
  let result = ''
  
  for (let i = 0; strN.length > i; i++){
    if (strN[i] === '-'){
        result = `${result}`
    }
    else {result = `${strN[i]}${result}`}
  }

return result;
}
