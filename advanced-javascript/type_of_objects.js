// cara-cara membuat object
// // 1. Object literal
// const student = {
//     // Property
//     name: 'Alexander',
//     energy: 10,
//     // Method
//     eat: function(porsion) {
//         this.energy += porsion;
//     }
// }
// console.log(student);


// 2. Function Declaration
// function comic(title, writer) {
//     const comic = {};
//     comic.title = title;
//     comic.writer = writer;

//     comic.setTitle = function(newTitle) {
//         this.title = newTitle;
//     }

//     comic.setWriter = function(newWriter) {
//         this.writer = newWriter;
//     }

//     return comic;
// }

// let naruto = comic('Naruto', 'Masashi Kishimoto');
// let onePiece = comic('One Piece', 'Eiichiro Oda')


// 3. Constructor Function
// Sama seperti membuat object menggunakan function declaration tapi menggunakan keyword new, dan tidak perlu mendeklarasikan object dan returnya
// function book(title, writer) {
//     this.title = title;
//     this.writer = writer;

//     this.setTitle = function(newTitle) {
//         this.title = newTitle;
//     }
// }


// let atomicHabits = new book('Atomic Habits', 'James clear');
// console.log(atomicHabits);