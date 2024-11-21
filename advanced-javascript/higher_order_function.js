// definisi higher order function
// function yang beroperasi pada function yang lain, baik itu digunakan dalam argument, maupun sebagai return value

// function yang digunakan sebagai argument disebut callback, sedangkan function yang memiliki callback disebut higher order function

//higher order function         callback
//     setTimeout(                 function() {

// }, 1000);



// function doTask(subject, finished) {
//     console.log(`Mulai mengerjakan tugas ${subject}....`);
//     finished(subject);
// }

// doTask('math', function(subject) {
//     alert(`selesai mengerjakan tugas ${subject}`);
// });

// function count(initVal, condVal) {
//     let total = 0;
//     while ( initVal <= condVal ) {
//         total += initVal;
//         initVal++
//     }
//     return total;
// }

// console.log(count(1, 10));


// function repeatLog(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// repeatLog(10);



// function repeat(n, action) {
//     for (let i = 1; i <= n; i++) {
//         action(i);
//     }
// }
// repeat(3, alert);


