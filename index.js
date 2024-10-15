// var a=20;
// var a=40;
// var a=50;
// console.log(a)
// document.write(a)
// let b=40;
//     b=50;
// console.log(b)
// document.write(b)
// const c=50;
// console.log(c)
// document.write(c)
// data type in javascript

// integer in short:int Number
// string in short str string
// boolean in short bool Boolean
// null in short null null   
// let a =30;
// let b =20;
// let c = a - b;     
// console.log(c);
// let d = a * b;                      
// console.log(d);
// let e = a / b;
// console.log(e);
// let f = a % b;
// console.log(f);
// a=b;
// console.log(a)
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a>=b);
// console.log(a<=b);
// let a=10;
// let b=20;
// prompt("enter your choice");
// alert("we are facing issues please try again");
// confirm("are you sure to delete this file");
// let num1=parseInt(prompt("enter the first number"));
// let num2=parseInt(prompt("enter the second number"));
// let c=num1+num2;
// alert(c)
// let age=parseInt(prompt("enter your age"))
// if(age>=18)
// {
//     alert("you are eligible")
// }else{alert("you are not eligible")}
// let day =parseInt(prompt("enter day of the week"))
// if(day==1){alert("monday")
// }else if(day==2){alert("tuesday")}
// else if(day==3){alert("wednesday")}
// else if(day==4){alert("thursday")}
// else if(day==5){alert("friday")}
// else if(day==6){alert("saturday")}
// else if(day==7){alert("sunday")}
// else{alert("Invalid day")}
// let month=parseInt(prompt("Enter your month number"))
// if (month==1) {
//     alert("january")
// }
// else if(month==2){alert("Febuary")}
// else if(month==3){alert("march")}
// else if(month==4){alert("april")}
// else if(month==5){alert("may")}
// else if(month==6){alert("june")}
// else if(month==7){alert("july")}
// else if(month==8){alert("august")}
// else if(month==9){alert("september")}
// else if(month==10){alert("october")}
// else if(month==11){alert("november")}
// else if(month==12){alert("december")}
// else{alert("invalid day")}


let email=("1234@gmail.com")
let password=("12345678")
let enteredemail=prompt("enter your email")
let enteredpassword=prompt("enter you password")
let confirmpass=prompt("confirm your password")
if (email==enteredemail && password==enteredpassword && enteredpassword==confirmpass) {
    alert("welcome back")
} else {
    alert("entry not found")
}