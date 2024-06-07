var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var a = scrambledArray.pop(); // I 
var b = scrambledArray.pop(); // GIAIC
var c = scrambledArray.pop(); // a
var d = scrambledArray.pop(); // am
scrambledArray.pop();
scrambledArray.pop();
scrambledArray.unshift(c);
scrambledArray.unshift(d);
scrambledArray.unshift(a);
scrambledArray.push(b);
var str = scrambledArray.join(" ");
console.log(str);
