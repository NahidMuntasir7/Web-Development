let arr = [1, 3, 4, 3, 2];
console.log(arr);

arr = arr.sort();
console.log(arr);

arr = arr.sort((a, b)=> b-a); // **dec**
console.log(arr);

let brr = [1, 3, -8, 3, -2, 7];

brr = brr.sort(); // wrong sorting
console.log(brr);

brr = brr.sort((a, b)=> a-b); // now okk **inc**
console.log(brr);

// abs sort
brr = brr.sort((a, b) => Math.abs(a) - Math.abs(b));
console.log(brr);