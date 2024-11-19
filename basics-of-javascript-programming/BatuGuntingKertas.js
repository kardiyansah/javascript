var t = true;

while ( t ) {
  // menangkap nilai player
  var p = prompt('Silahkan Pilih : batu, gunting, kertas');
  // menangkap nilai computer
  var comp = Math.random()
  // membuat bilangan random menjadi sebuah string
  if ( comp < 0.34 ) {
    comp = 'batu';
  } else if ( comp >= 0.34 && comp < 0.67 ) {
    comp = 'gunting';
  } else {
    comp = 'kertas';
  }
  
  var hasil = '';
  // rules
  if ( p == comp ) {
    hasil = 'seri';
  } else if ( p == 'batu' ) {
    hasil = ( comp == 'kertas' ) ? 'kalah' : 'menang'
  } else if ( p == 'gunting' ) {
    hasil = ( comp == 'batu' ) ? 'kalah' : 'menang'
  } else if ( p == 'kertas' ) {
    hasil = ( comp == 'gunting' ) ? 'kalah' : 'menang'
  } else {
    hasil = 'memasukan kata yang salah';
  }
 //hasil 
  alert('Anda Memilih : ' + p + '\nComputer Memilih : ' + comp + '\nMaka Hasilnya Anda ' + hasil );
  
  var t = confirm('Lagi?');
}
alert('Terima Kasih Sudah Bermain');