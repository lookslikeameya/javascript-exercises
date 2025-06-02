const fibonacci = function(n) {
let arr=[0,1]
n=parseInt(n)
if(n<0){
    return "OOPS"
}
for(let i=2;i<=n;i++){
    arr.push(arr[i-1]+arr[i-2])
}
return arr[n]
};

// Do not edit below this line
module.exports = fibonacci;
