var t = true

while ( t ) { 
  
  // parseInt digunakan untuk merubah angka string menjadi integer
  var angka = parseInt(prompt('silahkan masukan angka'));
  
  if ( angka % 2 === 0 ) {
    alert(angka + ' adalah bilangan genap');
  } else if (angka % 2 === 1 ) {
    alert(angka + ' adalah bilangan ganjil');
  } else {
    alert('yang anda masukan bukanlah sebuah angka');
  }

var t = confirm('lagi?');
}