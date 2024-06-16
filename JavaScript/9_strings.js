let s = "abc def";
console.log(s, s.length);

console.log(s[4]);

for(let i = 0; i < s.length; i++){
    console.log(s[i]);
}

for(const char of s){
    console.log(char);
}

// forEach loop does not work for strings 