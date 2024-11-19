// var s = '';
// for ( var i = 10; i > 0; i-- ) {
//   if ( i % 2 == 0 ) {
//     for ( var j = 10; j > 0; j-- ) {
//       if ( j % 2 == 0 ) {
//         s += '#';
//       } else {
//         s += ' ';
//       }
//     }
//   } else {
//     for ( var t = 10; t > 0; t-- ) {
//       if ( t % 2 == 0 ) {
//         s += ' ';
//       } else {
//         s += '#';
//       }
//     }
//   }
//   s += '\n';
// }
// console.log(s)

var s = '';
// segitiga siku siku terbalik
for ( var i = 1; i <= 20; i++ ) {
  if ( i <= 10 ) {
    for ( var j = 10; j > i; j-- ) {
      s += '  ';
    }
    for ( var k = 1; k <= i; k++ ) {
      s += '*';
    }
  } else {
    for ( var x = 11; x <= i; x++ ) {
      s += '  ';
    }
    for ( var v = 20; v > i; v-- ) {
      s += '*';
    }
  }
  s += '\n';
}

console.log(s);