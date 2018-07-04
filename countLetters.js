function countLetters(str){
  str = str.split(' ').join('').toLowerCase();

  var tempObj = {};

  for(var i = 0; i < str.length; i++){
    var tempChar = str[i];
    if(tempObj.hasOwnProperty(tempChar)){
      tempObj[tempChar]++;
    } else {
      tempObj[tempChar] = 1;
    }
  }

  return tempObj;
}

console.log(countLetters("lighthouse in the house"));