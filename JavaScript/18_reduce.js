let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

let x = arr.reduce(function(a, b){
    return a+b;
});
let y = arr.reduce(function(a, b){
    return a*b;
});

console.log(x);
console.log(y);