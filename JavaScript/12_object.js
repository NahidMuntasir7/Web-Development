// object is kinda map / dictionary where we have key-vslue pairs

// var details = ["Rifat", 24, 7.5, false];

// let x = {
//     name: "Rifat",
//     age: 23,
//     percentage: 95,
//     'is Married': false,
//     "nick name": "rifat"
// };

// console.log(x);

// console.log(x.age);
// console.log(x['age']);

// console.log(x['nick name']);
// console.log(x.name, x.age, x["is Married"], x.percentage, x["nick name"]);


// console.log(x['age']);
// x.age = 30;
// // x['age'] = 30 // works
// console.log(x['age']);



let x = {
    name: "Rifat",
    age: 23,
    percentage: 95,
    'is Married': false,
};

for(const key in x){
    console.log(key, x[key]);
}
// forIn loop
for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
        console.log(x[key]);
    }
}