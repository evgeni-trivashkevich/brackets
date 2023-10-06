module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0) {
    return false;
  }


  const open = bracketsConfig[0][0];
  const clouse = bracketsConfig[0][1];
  const openClouse = `${open}${clouse}`;
   

  let strRegexp = ''; 
  let regexp;
  if (bracketsConfig[0][0] === '1'){
    for (let key of bracketsConfig){
      strRegexp = `${strRegexp}${key[0]}${key[1]}|`;
    }
    strRegexp = strRegexp.substring(0, strRegexp.length - 1);
    regexp = new RegExp(strRegexp, 'g');
  } else {
    for (let key of bracketsConfig){
      strRegexp = `${strRegexp}\\${key[0]}\\${key[1]}|`;
    }
    strRegexp = strRegexp.substring(0, strRegexp.length - 1);
    regexp = new RegExp(strRegexp, 'g'); 
  }
  
    function chocolat(n) {

      console.log('***n***: ', n);
      let str2 = n.replaceAll(regexp, '');
      console.log('***str2***: ', str2);
      console.log('***str2.length***: ', str2.length);


      if (str2.length === 0) {
        return true;
      } else if (str2.length === n.length) {
        return false;
      }
      return chocolat(str2);
    } 
    
    return chocolat(str);
};


