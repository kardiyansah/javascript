// Arrow function adalah bentuk lain yang lebih ringkas dari function expression
// MDN


// Jika parameternya hanya satu tidak perlu dibungkus oleh (), dan jika code cuma sebaris itu tidak menggunakan {}, dan return. disebut sebagai implisit return
// const showName = name => `Hello ${name}`;
// console.log(showName('kardiyansah'));


// mencari panjang huruf pada nama
// let students = ['kardiyansah', 'alexander', 'hitler'];
// mengembalikan array
// let totalAbjad = students.map( name => name.length );
// console.log(totalAbjad);

// // mengembalikan object
// let totalAbjad = students.map( name => ({ name: name, totalAbjad: name.length }) );
// console.table(totalAbjad);




// konsep this pada arrow function
// constructor function
// const Student = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }
// let kardi = new Student('Kardiyansah', 19);
// console.log(kardi);
// kardi.sayHello();


// arrow function pada constructor 
// arrow function tidak boleh digunakan saat membuat constructor function
// arrow function hanya boleh digunakan pada method yang ada didalam constructor function
// const Student = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = () => {
//         console.log(`Hello my name is ${this.name}`);
//         // console.log(this);
//     }
// }
// let kardi = new Student('Kardiyansah', 19);
// console.log(kardi);
// kardi.sayHello();



// object literal
// const student1 = {
//     name: 'viktor',
//     age: 20,
//     sayHello: () => {
//         // Arrow function tidak mengenali konsep this, this pada arrow function langsung mengarah pada object window
//         console.log(this);
//         console.log(`Hello my name is ${this.name}`);
//     }
// }
// student1.sayHello();



// const Student = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = () => {
//         console.log(`Hello my name is ${this.name}`);
//         // console.log(this);
//     }

//     setInterval(() => {
//         // console.log(age++);
//         // console.log(this.age++);
//     }, 1500);

// }
// let kardi = new Student('Kardiyansah', 19);
// console.log(kardi);
// kardi.sayHello();




// const box = document.querySelector('.box');
// box.addEventListener('click', function() {

//     let one = 'size',
//         two = 'caption';
//     if ( this.classList.contains(one) ) {
//         // cara lama menukar isi variabel
//         // let temp = one;
//         // one = two;
//         // two = temp;
        
//         // Cara baru menukar isi variabel
//         [one, two] = [two, one];
//     }
    
//     this.classList.toggle(one);

//     setTimeout(() => {
//         this.classList.toggle(two);
//     }, 600);
// });




