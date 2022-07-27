

//object
// (will be written using keys and values )
let person={
    name:"rajinikanth",
    age:66,
    job:"actor",
    salary:1000,
    gender:"male",
    color:"orignal"
}
 console.log(person.name);
//  console.log(person.salary);
person.salary=100000;//to update the values of keys
person.salary=200000;
console.log(person.salary);
// for the creation of new object we can use syntax let object=new Object();

//for of
//it is used for array
// let array=[]
// array[0]=10;
// array[99]=100;
// console.log(array);
// console.log(array.length);

//by using for of we can print the output
// let array1=[]
// array1[0]=10;
// array1[99]=100;
// console.log(array1.length);
// for(let n of array1){
//     console.log(n);
// }

//for in
//it is use for object
// let laptop={
//     company:"hp",
//     cost:"50k",
//     color:"black",
//     memory:"1tb",
//     display:"4k"
// }
// console.log(laptop);
// console.log(laptop.company);
//by using for in
// let laptop1={
//     company:"hp",
//     cost:"50k",
//     color:"black",
//     memory:"1tb",
//     display:"4k"
// }
// for(let n in laptop1){//we get only keys
//     console.log(n);
// }
// for(let n in laptop1){//we will get only values
//     console.log(laptop1[n]);
// }
// for(let n in laptop1){//to get both keys and values
//     console.log(n,laptop1[n]);
//     console.log(`key is ${n} values is ${laptop1[n]}`);
// }


//for each
//for each and every array values logic will be applied 
// let array=[1,2,3,4,5]
// array.forEach(n => {
//    console.log(n*10);
// });


//MAP Method for object
//set
// var map=new Map();
// map.set(1,"one")
// map.set(2,"two")
// map.set(3,"three")
// map.set(4,"four")
// console.log(map);
// for(let n of map.keys()){//for getting only key use mapname.keys
//     console.log((n));
//     console.log(`key is ${n}`);//using templets
// }
// for(let n of map.values()){//for getting only key use mapname.values
//     console.log((n));
//     console.log(`values is ${n}`);//using templets
// }

// for(let [n,m] of map){//for getting only key  and values both 
//     console.log(`key is ${n} values is ${m}`);
// }



//Map method for array(map method will check each and every method)
//set
// let array=[1,2,3,4,5,6,7,2]
// let result=array.map(a=>a*10)//function with fat arrow
// console.log(result);

// let array=[1,2,3,4,5,6,7,2]//function with function name
// let result=array.map(
// function fun(a){
//     return a*10;
// })
// console.log(result);


// //Reduse Method
// const num=[1,-1,2,3]
// var a=num.reduce((accumulator,currentvalues)=>{
//     return accumulator*currentvalues;
// },7)
// console.log(a);

// var a=num.reduce((accumulator,currentvalues)=>{
//     return accumulator*currentvalues;
// })//we can use the values or we cant use
// console.log(a);




//Strings in javascript
//new string object
// var name=new String();
// console.log(typeof name);

// var name="hello good morning";
// //        0123456789101112131415161718
// console.log(name.length);//space will also be consider as string
// console.log(name[16]);//index value
// console.log(name[2]);

//includes
// var user="hai how are you"
// // console.log(user.includes(a));
// console.log(user.includes("a"));//should be given in ""
// //console.log(user.includes(w));
// console.log(user.includes("w"));

// starts with
// var user="hai how are you"
// var user1=" hai how are you"
// console.log(user.startsWith("hai"));
// console.log(user.startsWith("h"));
// console.log(user.startsWith("a"));
// console.log(user.startsWith("HAI"));
// console.log(user.startsWith("H"));
// console.log(user1.startsWith(" "));//if we have space in starts we should consider space first
// console.log(user1.startsWith("h"));
// console.log(user1.startsWith(" h"));
// console.log(user1.startsWith(" hai"));

// //ends with
// var user="hai how are you"
// var user1="hai how are you "
// console.log(user.endsWith("you"));
// console.log(user.endsWith("u"));
// console.log(user.endsWith("o"));
// console.log(user.endsWith("U"));
// console.log(user.endsWith("YOU"));
// console.log(user1.endsWith(" "));
// console.log(user1.endsWith("you "));


// //replace
// var user="hai good moring"
// console.log(user.replace("good moring", "good afternoon"));

// //to upptercase
// var user1="hai good moring"
// console.log(user1.toUpperCase());

// //to lower case
// var user2="HAI GOOD MORING"
// console.log(user2.toLowerCase());

// trim
// var users="   hai    "
// var users1="   hai   good    "
// console.log(users.trim());//it will remove space in end and last
// console.log(users1.trim());//but not in the between

//concat
// var user1="hello";
// var user2="world";
// console.log(user1.concat(user2));

// //indexof
// var user="hello world";
// console.log(user.indexOf("o", 5));

// //lastindexof
// var user="hello world";
// console.log(user.lastIndexOf("l"));

//search
// var user="good moring";
// console.log(user.search("m"));

//slice
// var user="hello everyone good moring";
// console.log(user.slice(2,12));

//substring
// var user="hello everyone good moring have a nice day";
// console.log(user.substring(6,20));


//substr
// var user="hello everyone good moring have a nice day";
// console.log(user.substr(-11,15));
// console.log(user.substr(5,10));


//repeat
// var user="hello everyone good moring have a nice day";
// console.log(user.repeat(10));

//split
// var user="hello everyone good moring have a nice day";
// console.log(user.split());




//Math objects

//PI and toFixed
const PI=Math.PI
console.log(PI);
console.log(PI.toFixed(3));

//round
//var a=(3.5);(if num after decmail point is >5 it will go to next num , <5 it will go to same num )
// console.log(Math.round(a));

//floor
//var b=4.7;(after decmail if num>5 or <5 it will go to same number)
//console.log(Math.floor(b));

//min(find min value)
// var a=Math.min(12,4567,7889900,089,23568,679);
// console.log(a);

//max(fine max value)
// var a=Math.max(12,4567,7889900,089,23568,679);
// console.log(a);

//power(exp 2^5)
// var a=Math.pow(2,5);
// console.log(a);

//random(in o/p we get some random num)
// var a=Math.random()
// console.log(a);
// var a1=Math.random().toFixed(4)*10
// console.log(a1);//to fix the number

//random (example prog)
// var random1=Math.random().toFixed(1)*10
// console.log(random1);
// var random2=Math.random().toFixed(1)*100
// console.log(random2);
// var random3=Math.random().toFixed(1)*1000
// console.log(random3);

//Date and Time

//get method (to get the values)
// var datentime=new Date();
// var year=datentime.getUTCFullYear();//utc is universal time
// var month=datentime.getUTCMonth();//month starts from 0-11
// var date=datentime.getDate();
// var day=datentime.getDay();//day will be in num starts from mon-1
// var time=datentime.getTime();//time will be not indian timing
// var hour=datentime.getUTCHours();
// var minutes=datentime.getMinutes();
// var sec=datentime.getSeconds();
// console.log(year,month,date,day,time,hour,minutes,sec);



//set method (to set the values)
// var e=new Date()
// e.setFullYear(2020);
// e.setMonth(11);
// e.setUTCDate(08)
// console.log(e);

//to set values without set and get method
// var a=new Date(2020,11,09);//(if we set like this date be reduse by one)
// console.log(a);


//Class and Method
// class User{//class name should starts with caps letter
//     constructor(firstname,lastname,rollno){//const will be created
//         this.firstname=firstname;// parameters of const should be defined using keyword "this"
//         this.lastname=lastname;
//         this.rollno=rollno;
//     }
//    getfullname(){
//        return `${this.firstname} ${this.lastname} is my full name`
//    }
// }
// var student= new User("tejs", "kumar", 420)//we should create new object in class
// console.log(student.getfullname());

//object and length
// //notes object have three properties object.value(object name),object.keys(object name) and object.entries(object name)
var obj = {
    name:"abcde",
    sem:"8th",
    rollno:"56",
    branch:"ece"
   }
   console.log(Object.keys(obj))
   console.log(Object.values(obj))
   console.log(Object.entries(obj))
   console.log(Object.entries(obj).length)
   console.table(obj);





