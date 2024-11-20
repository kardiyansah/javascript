// Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut
// MDN

// Closure adalah subuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi
// w3school

// Closure adalah sabuah function dikembalikan oleh function yang lain, yang memiliki akses ke linkungan saat ia diciptakan
// Code Fellow

// Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain
// Techsith


// function init() {
//     let name = 'alexander'; // Local Variables
//     function showName() { // Inner function memiliki akses ke parent functionnya
//         console.log(name); // ketika inner function membutukan variable dari parent function itu disebut closure
//     }


//     return showName;
// }
// let king = init();
// king();

// function test() {
//     return function showTitle(title) {
//         console.log(title);
//     }
// }


// let atomicHabits = test();
// let zeroToOne = test();
// atomicHabits('Atomic habits');
// zeroToOne('Zero To One');


// Factory function
// function sayTime(time) {
//     return function(name) {
//         console.log(`Hello ${name}, good ${time}`);
//     }
// }
// let goodMorning = sayTime('Morning');
// let goodAfternoon = sayTime('Afternoon');
// let goodNight = sayTime('Night');

// goodMorning('Alexander');
// goodNight('Kardiyansah');

// console.dir(goodAfternoon);


// Immediately invoked function
// let isClick = (function() {
//     let counter = 0;
//     return function() {
//         return ++counter;
//     }
// })();
// let plusClick = isClick()
// counter = 10;
// plusClick();
// console.log(isClick());
// console.log(isClick());
// console.log(isClick());