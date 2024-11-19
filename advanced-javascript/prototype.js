// cara-cara membuat object
// // 1. Object literal
// PROBLEM : tidak efektif untuk mengelola lebih dari satu object
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
// PROBLEM : 
// const comicMethods = {
//     setTitle: function(newTitle) {
//         this.title = newTitle;
//     },
    
//     setWriter: function(newWriter) {
//         this.writer = newWriter;
//     }
// }

// function comic(title, writer) {
//     // cara baru
//     // mirip inheritance pada php
//     const comic = Object.create(comicMethods);
//     comic.title = title;
//     comic.writer = writer;

//     // cara lama
//     // comic.setTitle = comicMethods.setTitle;
//     // comic.setWriter = comicMethods.setWriter;

//     return comic;
// }

// let naruto = comic('Naruto', 'Masashi Kishimoto');
// let onePiece = comic('One Piece', 'Eiichiro Oda');


// 3. Constructor Function
// Sama seperti membuat object menggunakan function declaration tapi menggunakan keyword new, dan tidak perlu mendeklarasikan object dan returnya
// function Student(name, energy) {
//     this.name = name;
//     this.energy = energy;

//     Student.prototype.eat = function(porsion) {
//         this.energy += porsion;
//         return `Selamat makan ${this.name}`;
//     }

//     Student.prototype.play = function(time) {
//         this.energy -= time;
//         return `Selamat bermain ${this.name}`;
//     }
// }


// Membuat class pada javascript
// class Student
// {
//     version = 'Testing';

//     constructor(name, energy) {
//         this.name = name;
//         this.energy = energy;
//         this.version = 'Example';
//     }

//     eat(porsion) {
//         this.energy += porsion;
//     }

//     play(time) {
//         this.energy -= time;
//     }

// }

// let kardiyansah = new Student('Kardiyansah', 100);
// let alexander = new Student('Alexander', 50);


