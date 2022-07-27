
//array in javascript
//push(add last), pop(del last), shift(del first), unshift(add first),splice(to del and replace data)
//reverse(reverse data), index number(find values using),sort(sort and give results in ascending or descending order)
//slice(slice data in array from index number),indexof(to find index num from left to right),lastIndexOf(to find index num from right to left)
//includes(to check data is present or not and results in boolean),find(find the any function),filter(give alls the satified o/p)
// join, flat(combine 2or more into one array)



//first method length
var name=["hello",2525,true,"hi"]
//console.log(name);
console.log(name.length);//4

//push
// let array=[2,12,21,3,30]
// console.log(array.push(66));
// console.log(array.push(777,99));//add the elements at the end and will output with its length and added value
// console.log(array);


//pop
// let array=[2,12,21,3,30]//pop will delect the last elements in array
// console.log(array.pop());
// console.log(array);

//unshift
// let array=[1,4,5,77,7,99]
// console.log(array.unshift(12));//to add the elements in first place
// console.log(array);

//shift
// var array=[12,76,08,63,72]
// console.log(array.shift());//to delect the first elements in array
// console.log(array);

// //splice
// let array=[1,2,3,4,5,6,7,8,9,10]
// //index    0 1 2 3 4 5 6 7 8 9
// console.log(array.splice(4,2));//here fisrt number will say index from where we need to del and 2rd say how many num to del
// console.log(array);

//splice using this method we can add or del numer or without deling we can add or del data
// let array=[1,2,3,4,5,6,7,8,9,10]
// //index    0 1 2 3 4 5 6 7 8 9
// console.log(array.splice(10,0,5,5,6,7,9));//here fisrt number will say index from where we need to del and 2rd say how many num to del after that we can add the add
// console.log(array);

//splice del the num and adding data to same place(replace)
// let array=[1,2,3,4,5,6,7,8,9,10]
// //index    0 1 2 3 4 5 6 7 8 9

// console.log(array.splice(5,5,12,34,56,7,8,77));
// console.log(array);

//reverse
// let array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array.reverse());//to reverse the elements
// console.log(array);

//reverse for string
// let array=["hello","hai","java","javascript"]
// console.log(array.reverse());//to reverse the elements
// console.log(array);

//to elements array by using index number
// let array=[1,2,3,4,5,6,7,8,9,09]
// console.log(array[8]);//index number inside square brackets

// let array=["hello","hai","java","javascript"]
// console.log(array[2]);//using string

//sort
// let array=[2,35,6,7,8,98,90,0,7678679,22436,78895,582,5,57225]
// let check=array.sort(function (a,b) { //function is used to find smallest to largest num
//     return a-b;//ascending
// })
// console.log(array);

// let array=[2,35,6,7,8,98,90,0,7678679,22436,78895,582,5,57225]
// let check=array.sort(function (a,b) { //function is used to find largest to smallest num
//     return b-a;//descending
// })
// console.log(array);

//slice
// let array=["aa","bb","cc","dd","ee","ff","gg","hh"]
// //index     0     1    2    3    4    5    6    7
// //index     -8    -7   -6   -5   -4   -3   -2   -1
// console.log(array.slice(2));//index nutber
// console.log(array.slice(2,5));//index number 1st index will includue but not lasr
// console.log(array.slice(-8,-3));//index number 1st index will includue but not lasr
// console.log(array);

//indexof
// let array=[35,6,7,90,8,98,90,0,7678679,22436,78895,582,5,57225]//its check from first to last
// console.log(array.indexOf(90,7));//start after data retunrs -1
// console.log(array.indexOf(7));
// console.log(array.indexOf(8,2));
// console.log(array.indexof(100));//if value not present o/p -1

//indexlast
// let array=[35,6,7,8,90,98,0,7678679,22436,90,8895,582,5,57225]//its check from last to first
// //index    0 1 2 3 4 5 6 7        8     9   10  11  12
// //index    13 12 11 10 9 8 7 6   5      4     3    2    1     
// console.log(array.lastIndexOf(90));
// console.log(array.lastIndexOf(90,5));
// console.log(array.lastIndexOf(100));

//includes
// let array=[1,2,3,4,5,3,6,7,8,9,10,"1,2"]
// let a=3;
// let b=100;
// let c='1,2';//we cnt give more tn one value
// console.log(array.includes(7));//we can give directly value
// let output=array.includes(a);//we can use var also
// console.log(output);
// console.log(array.includes(1,2));//if give 2 values we get false
// console.log(array.includes(c));
// console.log(array.includes("1,2"));


//find(it will give highest num)
// var array=[56,67,78,990,200]
// var abc=array.find(function(num){
//     return num>100;
//     return num>1000;//if condition not satified it returns undefined
// });
// console.log(abc);


//filter(it will give all the o/p)
// var array=[56,67,78,990,200]
// var abc=array.filter(function(num){
//     return num>100;
//     return num>1000;//if condition not satified it returns undefined
// });
// console.log(abc);

//join(to join the data inside the array)
// let array=[1,2,3,4,5,6]
// let array1=["hai","hello","good","morning"]
// console.log(array.join());
// console.log(array1.join());
// console.log(array.join(''));
// console.log(array1.join(''));
// console.log(array.join('+'));
// console.log(array1.join('+'));
// console.log(array.join(" "));
// console.log(array1.join(" "));

//flat (to join 2 or more array into one array)
// let array=[12,1,2,3,4,5,5,[99,89],[1,2],[9,8,7]]
// console.log(array.flat());



































