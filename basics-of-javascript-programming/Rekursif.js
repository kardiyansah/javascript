// versi looping
// function looping(n) {
//   for ( var i = n; i > 0; i-- ) {
//     console.log(i);
//   }
// }
// looping(10)

// versi rekursif(recursion)
// function tampilAngka(n) {
//   // base case
//   if ( n === 0 ) {
//     return;
//   }
//   console.log(n);
//   tampilAngka(n-1);
// }
// tampilAngka(10);

//loopingfaktorial
// function loopingFaktorial(n) {
//   var hasil = 1;
//   for ( var i = n; i > 0; i-- ) {
//     hasil *= i;
//   }
//   return hasil;
// }
// console.log(loopingFaktorial(5));

//rekursif faktorial
function faktorial(n) {
  if ( n === 0 ) {
    return 1;
  }
  return n * faktorial(n-1);
}
console.log(faktorial(5));