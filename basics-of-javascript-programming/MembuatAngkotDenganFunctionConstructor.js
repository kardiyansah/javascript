// Membuat Object Constructor.
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  
  // Membuat Method Penumpang Naik
  this.penumpangNaik = function(namapenumpang) {
    if ( this.penumpang == 0 ) {
      this.penumpang[0] = namapenumpang;
      return this.penumpang;
    } else {
      for ( var i = 0; i < this.penumpang.length; i++ ) {
        if ( this.penumpang[i] == undefined ) {
          
          this.penumpang[i] = namapenumpang;
          return penumpang;
          
        } else if ( this.penumpang[i] == namapenumpang ) {
          
          console.log(namapenumpang + ' Sudah Berada Didalam Angkot');
          return this.penumpang;
       
        } else if ( i == this.penumpang.length - 1 ) {
          
          this.penumpang.push(namapenumpang);
          return this.penumpang;
          
        }
      }
    }
  }
// Membuat Method Penumpang Turun
this.penumpangTurun = function(namapenumpang, bayar) {
    if ( this.penumpang.length == 0 ) {
       console.log('Angkot Masih Kosong');
       return this.penumpang;
    } else {
      for ( var i = 0; i < this.penumpang.length; i++ ) {
        if (this.penumpang[i] == namapenumpang ) {
       
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
      
        } else if ( i == this.penumpang.length - 1) {
        
          console.log(namapenumpang + ' Tidak Ada Didalam Angkot');
          return this.penumpang;
        
        }
      }
    }
  }
}



var angkot1 = new Angkot('Goku', ['neraka', 'surga'], [], 0);

var angkot2 = new Angkot('Naruto', ['konoha', 'suna'], [], 0);