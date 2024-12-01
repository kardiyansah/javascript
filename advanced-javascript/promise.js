// $.ajax({
//     url: 'http://omdbapi.com/?apikey=938aed99&s=avengers',
//     success: movies => console.log(movies)
// });


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.responseText));
//         } else if (xhr.status === 404) {
//             console.log(xhr.responseText);
//         }
//     }
// }
// xhr.open('get', 'http://omdbapi.com/?apikey=938aed99&s=avengers');
// xhr.send();


// const movies = fetch('http://omdbapi.com/?apikey=938aed99&s=avengers')
//  .then(response => response.json())
//  .then(response => console.log(response));

// Promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// Promise
// states (fulfilled / rejected / pending)
// callbacks (resolve / reject / finnaly)
// action (then / catch / finnaly)


// Example
// let test = false;
// const promise1 = new Promise((resolve, reject) => {
//     if (test) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('ingkar janji');
//     }
// });

// promise1
//  .then(response => console.log('OK : ' + response))
//  .catch(response => console.log('NOT OK :' + response))


// let testing = true;
// // Example 2
// const promise2 = new Promise((resolve, reject) => {
//     if (testing) {
//         setTimeout(() => {
//             resolve('Ditepati');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Ingkar');
//         }, 2000);
//     }
// });

// promise2
//  .finally(() => console.log('Pending'))
//  .then(response => console.log('OK : ' + response))
//  .catch(response => console.log('NOT OK :' + response))

// console.log('start');
// console.log(promise2.then(() => console.log(promise2)));
// console.log('finish');



// Promise.all()

// const student = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             name: 'John Doe',
//             age: 38
//         }]);
//     }, 2000);
// });

// const book = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             title: 'Atomic Habits',
//             totalPages: 300
//         }]);
//     }, 500);
// });

// Promise.all([student, book])
// //  .then(response => console.log(response));
//  .then(response => {
//     const [student, book] = response;
//     console.log(book);
//     console.log(student);
//  });