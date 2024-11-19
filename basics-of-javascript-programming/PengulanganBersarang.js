// var s = '';
// // segitiga sama sisi
// for ( var i = 0; i < 20; i++ ) {
//   if ( i < 10 ) {
//     for ( var j = 0; j < i; j++ ) {
//       s += '*';
//     }
//   } else {
//     for ( var x = 20; x > i; x-- ) {
//       s += '*';
//     }
//   }
//   s += '\n'
// }
// console.log(s);


var s = '';
// belah ketupat
for ( var i = 1; i <= 10; i++ ) {
  if ( i <= 5 ) {
    for ( var j = 5; j > i; j-- ) {
    s += ' ';
    }
    for ( var x = 1; x <= i; x++ ) {
    s += '*';
    }
    for ( var q = 1; q < i; q++ ) {
    s += '*';
    }
  } else {
    for ( var z = 6; z <= i; z++ ) {
      s += ' ';
    }
    for ( var k = 9; k >= i; k-- ) {
      s += '*';
    }
    for ( var u = 9; u > i; u-- ) {
      s += '*';
    }
  }
  s += '\n';
}
console.log(s)

