function ChangeCase() {  
}
//function to transform words to LowerCase
ChangeCase.changeWordsLowerCase = function (words) {
  return words.map(m => m.toLowerCase())
}
//function to transform words to UpperCase
ChangeCase.changeWordsUpperCase = function (words) {
  return words.map(m => m.toUpperCase())
}
//function to transform words to PascalCase
ChangeCase.changeWordsPascalCase = function (words) {
  return words
         .map(m => m.substr(0,1).toUpperCase() 
                   + m.substr(1).toLowerCase())
}

//Change case based on passed case fn and words
ChangeCase.changeCase = function (caseFn, words) {
  return caseFn(words);
}

module.exports = {
  ChangeCase  
}