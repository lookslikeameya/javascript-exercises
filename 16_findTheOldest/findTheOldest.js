const findTheOldest = function(arr) {
let max=0;

for (let i=0;i<arr.length;i++){
if(arr[i].yearOfDeath==undefined){
    arr[i].yearOfDeath=2025
}
if((arr[i].yearOfDeath-arr[i].yearOfBirth)>=max)
    max=(arr[i].yearOfDeath-arr[i].yearOfBirth)
}
for (let i=0;i<arr.length;i++){
if((arr[i].yearOfDeath-arr[i].yearOfBirth)==max)
    return arr[i];
}

};

// Do not edit below this line
module.exports = findTheOldest;
