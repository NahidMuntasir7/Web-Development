// arr = [4, "abc", 7.9, true, [4, 7, 4, 8]];
// console.log(arr);



// arr = [4, "abc", 7.9, true, [4, 7, 4, 8]];
// console.log(arr);

// for loop
// for(let i = 0; i <= arr.length; i++){
//     console.log(i, arr[i]);    
// } 



// ForOf loop

// for (const iterator of object) {
    
// }

// brr = [3, 7, 3, 8, 0, 2];
// for(let ele of brr){
//     ele *= 2;
//     console.log(ele); // change here
// }
// console.log(brr); // no change here



// ForEach loop

brr = [3, 7, 3, 8, 0, 2];
// brr.forEach(ele => {
//     console.log(ele);
// });

brr.forEach((ele, i, brr) => {
    console.log(ele, i, brr);
});