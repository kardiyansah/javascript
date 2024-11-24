// Callback
// Synchronous callback
// function hello(name) {
//     alert(`Hello ${name}`);
// }

// function printName(callback) {
//     const name = prompt(`Masukkan nama disini`);
//     callback(name);
// }
// // printName(hello)
// // printName(name => alert(`Hello ${name}`));


// const students = [
//     {
//         "name": "John Doe",
//         "age": 28,
//         "major": "Magic",
//         "address": "Magic Academy"
//     },
//     {
//         "name": "Victor",
//         "age": 2100,
//         "major": "Martial Arts",
//         "address": "NIghtingale"
//     },
//     {
//         "name": "Naruto",
//         "age": 28,
//         "major": "Ninjutsu",
//         "address": "Konohagakure"
//     }
// ];

// console.log('Start');
// students.forEach(student => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }

//     console.log(student.name)
// });
// console.log('Finish');




// Asynchronous Callback
// function getDataStudent(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.responseText);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('Start');
// getDataStudent('data/students.json', result => {
//     const students = JSON.parse(result);
//     students.forEach(student => console.log(student.name))
// }, () => {
    
// });
// console.log('Finish');



// JQuery
console.log('Start');
$.ajax({
    url: 'data/students.json',
    success: result => {
        result.forEach(student => console.log(student.name));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('Finish');
