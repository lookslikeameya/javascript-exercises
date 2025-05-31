const sumAll = function(a,b) {
    if (typeof(a)!='number'||typeof(b)!='number'){
        return "ERROR"
    }
     if (a % 1 !== 0||b % 1 !== 0){
        return "ERROR"
    }
    if (a <= 0||b <= 0){
        return "ERROR"
    }
    let temp=0;
    if (b>a){
        for(let i=a;i<=b;i++){
        temp+=i;
    }
    }
    if (a>b){
        for(let i=b;i<=a;i++){
        temp+=i;
    }}
    
return temp;
};

// Do not edit below this line
module.exports = sumAll;
