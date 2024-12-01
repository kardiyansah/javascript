// Asyncronous function
// "Sebuah function yang bekerja secara asyncronous (melalui event loop), yang menghasilkan (implisit) 
// promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang syncronous 
// (standart)"

// "sebuah async function dapat memiliki keyword await didalamnya untuk memberhentikan sementara 
// eksekusi fungsinya sambil menunggu promise-nya selesai"

// const test = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('finish');
//     }, 2000);
// });
// test.then(() => console.log(test));
// test.then((ts) => console.log(ts));
// console.log(test);


function testPromise() {
    return new Promise((resolve, reject) => {
        const time = 1000;
        if (time < 5000) {
            setTimeout(() => {
                resolve('finish');
            }, time);
        } else {
            reject('too late');
        }
    });
}

// const testing = testPromise();
// testing
//  .then(test => console.log(test))
//  .catch(test => console.log(test));

async function testAsync() {
    try {
        const testing = await testPromise();
        console.log(testing);
    } catch (e) {
        console.error(e);
    }
}

testAsync();