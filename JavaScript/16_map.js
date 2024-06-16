// map: ek array theke arek array banate with specific changes

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// let brr = [];

// for(const ele of arr){
//     brr.push(ele * 2);
// }
// console.log(brr);


// map

function twice(x){
    return 2*x;
}
function square(x){
    return x*x;
}
function add10(x){
    return x + 10;
}

let brr = arr.map(twice);
console.log(brr);

brr = arr.map(square);
console.log(brr);

brr = arr.map(add10);
console.log(brr);

// can be written as also

brr = arr.map(function add10(x){
    return x + 10;
});
console.log(brr);

brr = arr.map((ele)=>{
    return ele + 10;
});
console.log(brr);

arr = arr.map((ele)=>{
    return ele *ele;
});
console.log(arr);

arr = arr.map(ele => ele*ele);
console.log(arr);




 