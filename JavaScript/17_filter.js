let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

// filter out even elements

// function fun(ele){
//     if(ele%2) return true;
//     else return false;
// }
// arr = arr.filter(fun);
// console.log(arr);



// can be written as

// arr = arr.filter(function(ele){
//     if(ele%2==0) return true;
//     else return false;
// });
// console.log(arr);

// arr = arr.filter((ele)=>{
//     if(ele%2==0) return true;
//     else return false;
// });
// console.log(arr);

// arr = arr.filter((ele)=>{
//     if(ele<2) return true;
//     else return false;
// });
// console.log(arr);

// arr = arr.filter((ele)=>{
//     return (ele<5);
// });
// console.log(arr);

arr = arr.filter(ele=> (ele<6));
console.log(arr);