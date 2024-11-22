// HTML Fragments
// const book = {
//     title: 'Atomic Habits',
//     writer: 'James Clear',
//     totalPages: 300
// }

// const el = `<div class="book">
//     <h2>${book.title}</h2>
//     <span class="writer">${book.writer}</span>
// </div>`;

// console.log(el);



// Looping
// const books = [
//     {
//       title: 'Atomic Habits',
//       writer: 'James Clear',
//       totalPages: 300
//     },
//     {
//         title: 'The Psychology of Money',
//         writer: 'Morgan Houssel',
//         totalPages: 214
//     },
//     {
//         title: 'Rich Dad Poor Dad',
//         writer: 'Robert Kiyosaki',
//         totalPages: 418
//     }
// ]

// const el = `<div class="book">
//     ${books.map(book => `<ul>
//         <li>${book.title}</li>
//         <li>${book.writer}</li>
//     </ul>`).join('')}
// </div>`;


// Conditionals
// Ternary
// const song = {
//     title: 'Tetap Dalam Jiwa',
//     singer: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="song">
//     <ul>
//         <li>${song.singer}</li>
//         <li>${song.title} ${(song.feat) ? `(feat. ${song.feat})` : ``}</li>
//     </ul>
// </div>`;


// Nested
// HTML Fragments bersarang
// const student = {
//     name: 'Kardiyansah',
//     semester: 1,
//     subjects: [
//         'math',
//         'biology',
//         'accountant',
//         'economy'
//     ]
// }

// function printSubjects(subjects) {
//     return `<ol>
//         ${subjects.map(subject => `<li>${subject}</li>`).join('')}
//     </ol>`;
// }

// const el = `<div class="student">
//     <h2>${student.name}</h2>
//     <span class="semester">Semester : ${student.semester}</span>
//     <h4>Subjects :</h4>
//     ${printSubjects(student.subjects)}
// </div>`;

// document.body.innerHTML = el;