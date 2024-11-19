// Ada dua fase pada saat execution context

// console.log(king);
// var king = 'kardi';

// yang dilakukan Creation phase pada global context
// 1. Memberi nilai default pada variable dan function
// variabel = undefined
// function = code functionnya
// 2. konsep ini disebut hoisting
// 3. mendefinisikan window as = global object
// 4. mendenifisikan this as = window


// yang dilakukan Execution phase
// 1. mengganti nilai undefined pada variabel menjadi, value yang diset

// console.log(sayHello());
// var king = 'Kardiyansah';
// var age = 19;
// function sayHello() {
//     // function membuat execution context local
//     // yang didalam terdapat creation phase and execution phase seperti global execution context
//     // arguments
//     // terdapat hoisting 
//     console.log(`Halo nama saya ${king}, umur saya ${age}`);
// }

// var king = 'kardiyansah';
// var email = 'kardidragneel@gmail.com';

// function printURL(email) {
//     var facebookURL = 'https://facebook.com/';
//     return facebookURL + email
// }

// console.log(printURL(king));

// function a() {
//     b();
//     console.log('ini a');
    
//     function b() {
//         c();
//         console.log('ini b');
    
//         function c() {
//             console.log('ini c');
//         }

//     }

// }

// a();


// function one() {
//     console.log(king);
//     // var king = 'alexander';    
// }

// function two() {
//     console.log(king);
// }

// console.log(king);
// two('viktor');
// var king = 'kardiyansah';
// one();
// console.log(king);

