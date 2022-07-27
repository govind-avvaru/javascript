var myName="Hello";
console.log(myName);
var num=98
console.log(num)

console.log(10+"20"); //+ will consider as conconation is value is written inside ""
console.log(9-"5");//- will be same is subtraction
console.log("java"+"script");//concatation
console.log("java"+" "+"script");//space inside ""
console.log(""+"" );
console.log(""+0 );
console.log("hello" - "b");// the value will be not predictable so we will get NaN as output
console.log(true+true);//the value of ture is 1 and false is 0 and add and sub will br performed
console.log(true+false);
console.log(false+true);
console.log(false-true);

/*//== and ===
console.log(1==true);//== will check only the value ie 1 is number and true = 1 in boolean so ans is true
console.log(1===true);//=== will check both value and data type ie 1 is munber and true=1 but 1 is number datatype and true is boolean datatype so ans is false*/

//null
var num=null;// which create the memory space but doesnt have any value
console.log(num);

// // expression
// var a=10;
// var b=20;
// console.log(a+b);
// console.log(b-a);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(++a);//for ++ we have to use valuename not direct number
// console.log(--b);//for -- we have to use valuename not direct number
// console.log(10+10);//for all other operates we can we direct number or valuename 

// //compare (it will be used to 2 value)
// var a=10;
// var b=20;
// var c=a>b;
// console.log(c);// we can use directly also
// console.log(a<b);
// console.log(a>b);
// console.log(b<a);
// console.log(b>a);
// console.log(a>=b);
// console.log(a<=b);
// console.log(b<=a);
// console.log(b>=a);
// console.log(a!=b);
// console.log(a==b);
// console.log(a===b);



// //swap without using 3rd variable
// var a=10;
// var b=20;
// a=a+b;//10=10+20=30 500+30 530
// b=a-b;//20=30-20=10 530-30 500
// a=a-b;//30=30-10=20 530-500 30
// console.log(a);
// console.log(b);


// //conditional statement
// //if else
// var a=18;
// if (a>=18)
// {
// console.log("eligible to vote");
// }
// else
// {
// console.log("not eligible");
// }

// //if
// var a=18;
// if (a>=18) 
// {
//     console.log(true);
// } 

// //example program
// var a=24.5;
// if(a>=12)
// {
//     console.log("good_afternoon");
// }
// else
// {
//     console.log("good_morning");
// }


// //if else if or nested if
// var a=10;
// var b=20;
// var c=70;
// if (a>b && a>c)
// {
//     console.log("a is greater"+a);/*+ is used to value*/
//     console.log(a);
// }
// else if (b>c && b>a)
// {
//    console.log("b is greater");
//    console.log(b);
// }
// else if(c>a && c>b)
// {
//     console.log("c is greater" ,c);/*"," is used print value*/
//     console.log(c);
// }
// else{
//     console.log("default");
// }


// //ternary operator
// var age=20;
// (age>=18)?console.log("eligible to vote"):("not eligible to vote")

// //switch case
// //WITHOUT break
// var day="MondaY";
// switch(day){
//     case 'Monday':
//          console.log("9:00 AM");
//     case 'Tuesday':
//          console.log("10:00 AM");
//     case 'Wednesday':
//          console.log("11:00 AM");
//     case 'Thursday':
//          console.log("7:30 AM");
//     case 'Friday': 
//         console.log("6:00 AM");
//     case 'Saturday':
//          console.log("8:00 AM");
//     case 'Sunday': 
//         console.log("5:00 AM"); 
// }


// //switch when we have same value we can skip print statement
// var day="Monday";
// switch(day){
//     case 'Monday':
//          console.log("9:00 AM");
//          break;
//     case 'Tuesday':
//     case 'Wednesday':
//          console.log("11:00 AM");
//          break;
//     case 'Thursday':
//          console.log("7:30 AM");
//          break;
//     case 'Friday': 
//         console.log("6:00 AM");
//         break;
//     case 'Saturday':
//          console.log("8:00 AM");
//          break;
//     case 'Sunday': 
//         console.log("5:00 AM"); 
// }
// console.log("good morning");




// //switch with break
// var day="Monday";
// switch(day){
//     case 'Monday':
//          console.log("9:00 AM");
//          break;
//     case 'Tuesday':
//          console.log("10:00 AM");
//          break;
//     case 'Wednesday':
//          console.log("11:00 AM");
//          break;
//     case 'Thursday':
//          console.log("7:30 AM");
//          break;
//     case 'Friday': 
//         console.log("6:00 AM");
//         break;
//     case 'Saturday':
//          console.log("8:00 AM");
//          break;
//     case 'Sunday': 
//         console.log("5:00 AM"); 
// }
// console.log("good morning");

//switch with break and deafult
var day="day";
switch(day){
    case 'Monday':
         console.log("9:00 AM");
         break;
    case 'Tuesday':
         console.log("10:00 AM");
         break;
    case 'Wednesday':
         console.log("11:00 AM");
         break;
    case 'Thursday':
         console.log("7:30 AM");
         break;
    case 'Friday': 
        console.log("6:00 AM");
        break;
    case 'Saturday':
         console.log("8:00 AM");
         break;
    case 'Sunday': 
        console.log("5:00 AM"); 
    default:
        console.log("value not presentin case");
}


//example program given 3 num a,b,c return true if it possible to add 2 of the num to get 3rd 
var a=5;
var b=4;
var c=1;
((a+b==c)||(a+c==b)||(b+c==a))?console.log("true"):console.log("false");

//example program to get multiple of 20's +1 and +2(eg 21,22,41,42,81,82,61,61,101,102)
var number=40;
if(number%20==0)
{
console.log("false");
}
else if((number%20==1)||(number%20==2))
{
    console.log("true");
}
else
{
    console.log("not a given");
}
var number=43;// same using conditional opertor
((number%20==2)||(number%20==1))?console.log("true"):console.log("false");


//example program to get multiple of 20's -1 and -2(eg 19,18,39,38,59,58,79,78,99,98)
var number=59;
var num=(number/20);
(num<1)?console.log("true"):console.log("false");

var num=19;
((num%20==18)||(num%20==19))?console.log("true"):console.log("false");

// //looping statement
// //for loop(initialise condition increment)
// for(var i=1; i<=5; i++){
//     console.log("hello");
// }
// for(var i=5; i>=0; i--){
//     console.log("hello");
// }

// // while loop
// var i=1;
// while (i<=10) {
//          console.log("good afternoon"); 
//          i++;
// }

// // do while loop
// var i=1;
// do{
//     console.log("good afternoon");
//     i++;
// }while (i<=5)

// // while loop for wrong condition
// var i=2;
// do{
//         console.log("good afternoon");
//         i++;
// }while (i<=1)


// // multiples of 5 upto 50 using while loop
// var i=1;
// while (i<=50) {
//    if(i%5==0){
//        console.log(i);
//    }
//    i++;
// }






// //diffrences betweem var , let and const
// if(true){
//     var a="JS";//using var we can call varable outside or inside the scope
//     // console.log("ECMA" +a);
// }
// console.log("ECMA" +a);

// if(true){
//     var a="JS";//using let we can call varable inside the scope
//     console.log("ECMA" +a);
// }
// console.log("ECMA" +a);//using let we can't call varable outside the scope

// if(true){
//     const a="JS";//using const we can call varable inside the scope
//     console.log("ECMA" +a);
// }
// console.log("ECMA" +a);//using let we can't call varable outside the scope


//let and const difference
//let
// let a=10;
// let a=20;//redeclarction is not possible
// a=20;//reiniationalization is possible
// console.log(a);//can be used only inside the loop

// //const
// const a=10;
// const a=10;//redecleaction and reinilatinalization is not possible
// a=10;//can be used only inside the loop
// console.log(a);

// //var
// var a=10;
// var a=20;
// a=50;//both are possible in var and can be used in both outside and inside the loop
// console.log(a);







































