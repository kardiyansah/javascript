var penumpang = [];

var tambahPenumpang = function(namapenumpang, penumpang) {
  // jika penumpang kosong
  if ( penumpang.length == 0 ) {
    penumpang.push(namapenumpang);
    return penumpang;
  } else {
    for ( var i = 0; i < penumpang.length; i++ ) {
      // jika ada kursi kosong yang diisi dengan undefined
      if ( penumpang[i] == undefined ) {
        penumpang[i] = namapenumpang;
        return penumpang;
      // jika nama penumpang sama
      } else if ( namapenumpang == penumpang[i] ) {
        console.log(namapenumpang + ' sudah ada didalam angkot');
        return penumpang;
      // menelusuri angkot sampai akhir
      } else if ( i == penumpang.length - 1 ) {
        penumpang.push(namapenumpang);
        return penumpang;
      }
    }
  }
}

var hapusPenumpang = function(namapenumpang, penumpang) {
  // jika angkot masih kosong
  if ( penumpang.length == 0 ) {
    console.log('angkot masih kosong');
    return penumpang;
  } else {
    for ( var j = 0; j < penumpang.length; j++ ) {
      // jika namapenumpang sama dengan penumpang
      if (penumpang[j] == namapenumpang) {
        penumpang[j] = undefined;
        return penumpang;
      // menelusuri angkot sampai akhir
      } else if ( j == penumpang.length - 1) {
        console.log(namapenumpang + ' tidak ada didalam angkot');
        return penumpang;
      }
    }
  }
}