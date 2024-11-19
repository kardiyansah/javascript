var t = true

while ( t ) {
  var i = prompt('Masukan Nama Makanan / Minuman\n(cth : salad, telur, susu, softdrink, cola, burger)');

  switch ( i ) {
    case 'salad' :
    case 'telur' :
    case 'susu' :
      alert( i + ' Makanan / Minuman Yang Sehat');
      break;
    case 'softdrink' :
    case 'cola' :
    case 'burger' :
      alert( i + ' Makanan / Minuman Yang Tidak Sehat');
      break;
    default :
      alert('Nama Makanan / Minuman Yang Anda Masukan Salah');
      break;
  }
  var t = confirm('lagi?')
}

// var x = parseInt(prompt('Masukan Angka'));

// switch ( x ) {
//   case 1 :
//   case 2 :
//   case 3 :
//     alert('Anda Memasukan Angka ' + x);
//     break;
//   default :
//     alert('Yang Anda Masukan Bukan Angka');
//     break;
// }