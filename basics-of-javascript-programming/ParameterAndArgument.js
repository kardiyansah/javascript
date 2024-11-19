         // (parameter)
function tambah(a, b) {
  return a + b;
}
// jika argument lebih banyak dari parameternya maka argument yang berlebih itu diabaikan
// jika parameter lebih banyak dari argumentnya maka parameter yang berlebih di ubah menjadi undefined

// Cara-cara memasukan nilai ke argument

// -langsung mamasukan nilainya
           // (argument)
// alert(tambah(10, 1));

// -memasukan nilainya kedalam variable
// var a dan b sebagai argument beda dengan a dan b sebagai parameter, karna adanya scope
// var a = 30,
//     b = 20;
    
// var hasil = tambah(a, b);
// console.log(hasil);

// -argument diambil melalui inputan user
// var a = parseInt(prompt('Masukan Angka'));
// var b = parseInt(prompt('Masukan Angka'));

// var hasil = tambah(a, b);
// alert(hasil);

// -menambahkan nilai dengan operasi matematika(+, -, *, /)
// var a = parseInt(prompt('Masukan Angka'));
// var b = parseInt(prompt('Masukan Angka'));

// var hasil = tambah(a - 1, b * 2);
// alert(hasil);

// -memasukan function kedalam argument
// function kali(a, b) {
//   return a * b;
// }
// var hasil = kali(tambah(2, 3), tambah(7, 3));
// console.log(hasil);

// khusus dijavascript ada sebuah variable khusus yang namanya arguments(psuedo-variable), yang bentuknya adalah array, biasanya semua inputan(nilai) yang dikirim malalui argument tersimpan dalam array arguments(psuedo-variable).
// function tes() {
//   return arguments;
// }
// var x = tes(2, 11, 'hi', true)
// console.log(x)

// function tambahUnlimited
function tambahUnlimited() {
  var hasil = 0;
  for ( var i = 0; i < arguments.length; i++ ) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = tambahUnlimited(10, 20, 30, 50,100);
console.log(coba);