// N 1

// let someArr = [];

// for(let i = 3; i < 100; i+=3){
//     someArr.push(i);
// }

// console.log(someArr);

// N 2

// let friendsNames = ["ალექსანდრე", "გიორგი", "აჩიკო", "ლუკა"];

// for (let i = 0; i < friendsNames.length; i++) {
//     if (friendsNames[i][0] === "ა") {
//         console.log(friendsNames[i]);
//     }
// }

// N 3

// let someArr = [];

// for(let i = 0; i < 50; i++){
//     if(i % 2 === 0 || i % 5 === 0){
//         if(i % 10 !== 0){
//             someArr.push(i);
//         }
//     }
// }
// console.log(someArr);

// N 4


// let numArr = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];
// let answerArr = [];

// for(let i = 0; i < numArr.length; i++){
//     let bucket = 0;
//     for(let j = 1; j <= Math.sqrt(numArr[i]); j++){
//         if(numArr[i] % j === 0){
//             if(j !== Math.sqrt(numArr[i])){
//                 bucket += 2;
//             }else{
//                 bucket += 1;
//             }
//         }
//     }
//     answerArr.push(bucket);
// }

// console.log(answerArr);

// N 5

// let userNum = parseInt(prompt("შეიყვანეთ რიცხვი 100-დან 200-მდე"));
// if(userNum < 100 || userNum > 200){
//     alert("თქვენ შეცდომით შეიყვანეთ რიცხვი ცადეთ ხელახლა!");
// }

// let someArr = [];

// for(let i = 0; i < userNum; i++){
//     if(i % 5 === 0){
//         someArr.push(i);
//     }
// }

// console.log(someArr);


// N 6

// let someArr = [];

// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     someArr.push(randomNumber);
// }

// console.log(someArr);

// for(let i = 0; i < someArr.length; i++){
//     if(someArr[i] % 3 === 0){
//         console.log(someArr[i]);
//     }
// }


// N 7

// let answerArr = [];

// for(let i = 0; i < 100; i++){
//     let bucket = [];
//     for(let j = 1; j <= i; j++){
//         if(i % j === 0){
//             bucket.push(j);
//         }
//     }
//     if(bucket.length === 2){
//         answerArr.push(i);
//     }
// }

// console.log(answerArr);


// N 8

// let someArr = [1, 2, 6, 7, 9, 11, 15, 16, 17];
// console.log(someArr);
// let answerArr = [];

// for (let i = 0; i < someArr.length; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(someArr[i]); j++) {
//         if (someArr[i] % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime && someArr[i] > 1) {
//         answerArr.push(someArr[i]);
//     }
// }

// if (answerArr.length > 0) {
//     console.log("მარტივი რიცხვები ნაპოვნია: " + answerArr.join(', '));
// } else {
//     console.log("მარტივი რიცხვები ვერ მოიძებნა");
// }


// N 9

// let someArr = [];
// let answerArr = [];

// for (let i = 0; i < 20; i++) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     someArr.push(randomNumber);
// }

// console.log(someArr);

// for(let j = 0; j < someArr.length; j++){
//     if(someArr[j] % 5 === 0){
//         answerArr.push(someArr[j]);
//     }
// }

// console.log(answerArr);


// N 10

// let numberArr = [];

// while (numberArr.length < 10) {
//     let randomNumber = Math.floor(Math.random() * 21); 
//     let isDuplicate = false;

//     for (let i = 0; i < numberArr.length; i++) {
//         if (numberArr[i] === randomNumber) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (!isDuplicate) {
//         numberArr.push(randomNumber); 
//     }
// }

// console.log(numberArr);


// N 11

// function randomRGB(){
//     return Math.floor(Math.random() * 256);
// }

// function changeButtonColor(button){

//     var randomColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
//     button.style.backgroundColor = randomColor;
// }


// N 12


// const btnName = "btn";

// for(let i = 1; i < 21; i++){
//     let randomNum = Math.floor(Math.random() * 50 + 1);
//     let btnId = btnName + i;
//     document.getElementById(`${btnId}`).innerHTML = randomNum;
// }

// function findDividers(button){
//     let txt = button.textContent;
//     let someNum = parseInt(txt);
//     let bucket = [];
//     for(let i = 1; i <= someNum; i++){
//         if(someNum % i === 0){
//             bucket.push(i);
//         }
//     }

//     alert(`ღილაკში მოთავსებული რიცხვის გამყოფების რაოდენობაა: ${bucket.length}`);
// }


// N 13 

// const btnName = "btn";

// function randomRGB(){
//     return Math.floor(Math.random() * 256);
// }

// function changeButtonColor(){

//     for(let i = 1; i < 7; i++){
//         var randomColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
//         let targetId = btnName + i;
//         document.getElementById(targetId).style.backgroundColor = randomColor;
//     }
// }