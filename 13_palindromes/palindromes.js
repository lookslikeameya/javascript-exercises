function makegood(str) {
    str= str.toLowerCase()
    let lettersArray = str.replace(/[^a-z0-9]+/gi, '').split('');
    return lettersArray;}

const palindromes = function (str) {
    arr=makegood(str);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[arr.length-1-i]){
            return false;
            
            
        }
    }
    return true;

   
};
// Do not edit below this line
module.exports = palindromes;
