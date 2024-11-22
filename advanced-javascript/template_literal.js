// Template Literal / Template String
// Template literal adalah string literal yang memungkinkan adanya expression didalamnya

// string literal '', "", ``

// Template literal
// -Menggunkan ``
// `string text`


// -Multi-Line String
// `string line 1
//  string line 2
//  string line 2`


// -Embedded Expression
// `string text ${expression} string text`


// -HTML Fragments
// const student = {
//     name: 'alex',
//     age: 23
// }
// let el = `<div class="name">
//             <h2>${student.name}</h2>
//             <span class="age">${student.age}</span>
//         </div>`;
// let el = ''
// el += '<div class="student">';
// el += '<h2>' + student.name + '</h2>';
// el += '</div>';
// console.log(el);


// -Expression Interpolation
// let a = 10,
//     b = 15;
// console.log(`jika a = 10 dan b = 15, maka hasil penjumlhannya : ${a + b}, bukan ${2 * (a + b)}`);


// -Tagged Template 
// example`string text ${expression} string text`