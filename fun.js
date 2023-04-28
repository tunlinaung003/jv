// function run(){
// console.log("one");
// console.log("two");
// console.log("three");

// };
// run();

// function createTriangle(){
    
// console.log("*");
// console.log("* *");
// console.log("* * *");
// console.log("* * * *");
// return "i m triangle";
// };

// console.log(createTriangle());

//if u know ur age, i can find birth years;
//2023 - ur age 


// function findBirthYears(age){
// let findBirth =2023-age;
// return findBirth;
// }

// console.log(findBirthYears(20));


let results =[];
let index=0;

function roomArea(width,breath){
    let area = width * breath;
let result = {
    width : width + "ft",
    breath:breath + " ft",
    area:area + "sqft",
    
        };
        results[index] = result;
        index++;
    return result;
};

// console.table(roomArea(20,60));
// console.table(roomArea(30,60));
// console.table(roomArea(40,60));


// console.log(results);

//150usd = ?mmk
//79EUR= ?mmk
//30SGD=?mmk



// let rates={
//     USD:2100,
//     SGD:1574,
//     EUR:2251,
// };

// function toMMK(amount,fromCurrency){
// let currentRate = rates[fromCurrency];
// return (amount * currentRate) + "MMK";

// };

// console.log(toMMK(150,"USD"));


// let results =[];
// let index=0;

// function roomArea(width,breath){
//     let area = width * breath;
//     let result={
//         width:width + "ft",
//         breath:breath + "ft",
//         area:area + "sqft" 

//     };
//     results[index++] = result;
//     return result;
// };

// console.table(roomArea(20,60));
// console.table(roomArea(30,60));
// console.table(roomArea(60,60));

//fun expression 

// let run = function () {
//     return "i m fun expression";
// };

// console.log(run());

// (function(){
//     console.log("i m ILFE");
//     return "i m ILFE"
// })();

// let x = function(){
//     return "x";
// };

// let y = function (){
// return x() + "y";
// };

// console.log(y());


//block scope
// {
// let x ="x";
// console.log(x);
// };


// function run(){

//     let x ="x";
//     console.log(x);
// };

// run()

// console.log(x());

// function x(){
//     return "X";
// };

// console.log(y());


//  let y =function(){
//     return "y";
// };

