const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNum = [];
var oddNum = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNum.push(arr[i]);
    } else {
        oddNum.push(arr[i]);
    }
}

console.log("EVEN NUMBERS:");
for (var j = 0; j < evenNum.length; j++) {
    console.log(evenNum[j]);
}

console.log("ODD NUMBERS:");
for (var k = 0; k < oddNum.length; k++) {
    console.log(oddNum[k]);
}

