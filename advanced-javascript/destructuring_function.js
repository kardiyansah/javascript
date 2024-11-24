// Destructuring function

// function calculate(a, b) {
//     return [a + b, a * b, a - b, a / b];
// }

// const [plus, time, minus, divide = 'Not Available'] = calculate(3, 3);
// console.log(time);
// console.log(divide);



// function calculate(a, b) {
//     return {
//         plus: a + b,
//         minus: a - b,
//         time: a * b,
//         divide: a / b
//     }
// }

// const {divide, plus, time, minus} = calculate(4, 4);
// console.log(plus);



// destructuring function arguments
// const book = {
//     title: 'Atomic Habits',
//     writer: 'Jmaes Clear',
//     totalPages: 300,
//     ratings: {
//         customer: 8,
//         criticus: 7
//     }
// }

// function printBook({title, totalPages, ratings: {customer}}) {
//     return `The name of book is ${title} total pages ${totalPages}, and my rating ${customer}`;
// }
// console.log(printBook(book));
