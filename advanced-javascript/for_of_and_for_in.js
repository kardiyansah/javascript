// for .. of
// membuat looping terhadap object-object iterables

// Iterable object
// String
// Array
// Arguments / Nodelist
// TypedArray
// Map
// Set
// User-defined iterables


// Looping array
// const students = ['alex', 'victor', 'john'];
// for (const student of students) {
//     console.log(`Hello ${student}`);
// }

// parameter kedua pada forEach adalah index, dan itu adalah parameter default
// students.forEach((student, index) => console.log(`Hello nama saya ${student} saya orang ke-${index}`));


// Looping string
// const name = "Kardiyansah";
// for (const [index, student] of students.entries()) {
//     console.log(`Hello nama saya ${student} saya orang ke-${index + 1}`);
// }



// Looping NodeList
// const listName = document.querySelectorAll('.name');

// // listName.forEach(ln => console.log(ln.innerHTML));
// for (const ln of listName) {
//     console.log(ln.textContent);
// }

// console.log(listName);


// Looping arguments
// function addition() {
//     return [...arguments].reduce((total, number) => total + number);
// }

// console.log(addition(1, 2, 2, 7, 8));




// for .. in
// creates a loop only over enumerable / object
// const student = {
//     name: 'John doe',
//     age: 27,
//     major: 'Magic'
// }

// for (const std in student) {
//     console.log(student[std]);
// }
