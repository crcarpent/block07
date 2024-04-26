const list = ['abc','efg','hij','lmn'];

//add to the end of the array
list.push('opq')

//removed the first item
//store value of what you shifted
let shifted = list.shift();

console.log(shifted);
console.log(list[3]);
console.log(list.length)