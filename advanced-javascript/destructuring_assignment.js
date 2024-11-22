// Destructuring Variables / Destructuring Assignment

// Destructuring Array
const example = ['one', 'two', 'three'];
// Boleh melompati element pada array [a, , ,b] disebut sebagai skipping item
// const [a, ,c] = example;

// // Menukar array / swap array 
// let a = 10,
//     b = 20;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];

// // const [a, b, c] = example;
// console.log(a);
// console.log(b);
// console.log(c);


// Return value pada function
// function testing() {
//     return [1, 2];
// }
// const [a, b] = testing();
// console.log(a);


// Rest parameters
// const [a, ...values] = [1, 2, 4, 7, 11];
// console.log(a);
// console.log(values);


// Destructuring Object
// const book = {
//     title: 'Atomic Habits',
//     writer: 'James Clear'
// }

// const {title, writer} = book;
// console.log(title);


// Assignment tanpa deklarasi
// ({title, writer} = {
//     title: 'Atomic Habits',
//     writer: 'James Clear'
// });
// console.log(writer);


// Merubah name pada destructuring object dan memberikan nilai default
// const book = {
//     title: 'Atomic Habits',
//     writer: 'James Clear',
//     email: 'example@gmail.com'
// }
// const {title: t, writer: w, email: e = 'test@gmail.com'} = book;
// console.log(e);


// Rest Parameters
// const book = {
//     title: 'Atomic Habits',
//     writer: 'James Clear',
//     email: 'example@gmail.com'
// }
// // rest parameternya bentuknya object
// const {title, ...values} = book;
// console.log(values);


// Mengambil field pada object setelah dikirim sebagai parameter
const student = {
    id: 11,
    name: 'Viktor',
    age: 2000,
}

function getIdStudent({id}) {
    return id;
}
console.log(getIdStudent(student));
