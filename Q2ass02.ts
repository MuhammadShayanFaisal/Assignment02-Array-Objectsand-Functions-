const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
let a=scrambledArray.pop();// I 
let b=scrambledArray.pop();// GIAIC
let c=scrambledArray.pop();// a
let d=scrambledArray.pop();// am
scrambledArray.pop();
scrambledArray.pop();
scrambledArray.unshift(c);
scrambledArray.unshift(d);
scrambledArray.unshift(a);
scrambledArray.push(b);
let str=scrambledArray.join(" ")
console.log(str);
