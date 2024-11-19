alert('Selamat Datang Digame Tebak Angka');

var t = true;
while ( t ) {
  
  var comp = Math.floor(Math.random() * 10) + 1
  
  for ( var i = 3; i > 0; i-- ) {
    var p = parseInt(prompt('Silahkan Masukan Angka 1-10.\nAnda Memiliki 3 Kesempatan'));
    
    if ( p == comp ) {
      alert(p + ' Adalah Jawaban Yang Benar');
      break;
    } else if ( i == 1 ) {
      alert('Kesempatan Anda Sudah Habis\nJawabannya ' + comp);
    } else if ( p < comp ) {
      alert('Angka Yang Anda Masukan Terlalu Rendah\nKesempatan Anda Sisa ' + (i-1));
    } else if ( p > comp ) {
      alert('Angka Yang Anda Masukan Terlalu Tinggi\nKesempatan Anda Sisa ' + (i-1));
    } else {
      alert('Yang Anda Masukan Bukanlah Angka\nKesempatan Anda Sisa ' + (i-1));
    }
  }
  var t = confirm('Ingin Bermain Lagi');
}