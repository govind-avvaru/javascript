// var tea = 3;
// var candy=8;
// if((tea<5)&&(candy>5)||(tea>5)&&(candy<5)){
//     console.log("0");
// }
// else if(((tea<=10)&&(tea>=5))&&((candy>=5)&&(candy<10))){
//     console.log("1");
// }
// else{
//     console.log("2");
// }

var hi="hello";
console.log(hi);
console.log(10+"20");
console.log(9-"5");

var a=10;
var b=20;
var c;

c=b;
b=a;
a=c;
console.log(a);
console.log(b);


let x = myFunction(5, 2);  

function myFunction(a, b) {
  return a * b;        
  
}


// Create a multidimensional array
let table = new Array(10); // 10 rows of the table

for(let i = 0; i < table.length; i++) {
table[i] = new Array(10); // Each row has 10 column

}
// Initialize the array
for(let row = 0; row < table.length; row++) {
for(let col = 0; col < table[row].length; col++) {
table[row][col] = row*col;
}
}
// Use the multidimensional array to compute 5*7
console.log(table[5][7]); // => 35

