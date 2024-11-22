// Filter, Map, dan Reduce menghasilkan array baru dan tidak menghilangkan array lamanya

const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka yang >= 3

// menggunakan for 
// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if ( numbers[i] >= 3 ) {
//         newNumbers.push(numbers[i]);
//     }
// }
// console.log(newNumbers);



// Filter untuk menfilter values yang ada didalam array
// const newNumbers = numbers.filter(number => number >= 3);
// console.log(newNumbers);


// Map digunakan untuk memanipulasi values yang ada didalam array
// Kalikan 2 semua values yang ada didalam array numbers
// const newNumbers = numbers.map(number => number * 2);
// console.log(numbers);
// console.log(newNumbers);



// Reduce menjumlahkan values yang ada didalam array
// nilai default pada accumulator = '' / 0                                        
// const totalNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(totalNumbers);



// Method Chaining
// Cari angka > 5 lalu * 3 lalu jumlahkan
// const result = numbers.filter(number => number > 5) // 8, 9, 9
//  .map(number => number * 3) // 24, 27, 27
//  .reduce((total, number) => total + number); // 78
// console.log(result);
