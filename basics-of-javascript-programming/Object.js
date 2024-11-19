// var mhs = {
//   // variable didalam object disebut properties
//   nama : 'erwin',
//   lulus : true,
  
//   ipsemester : [3.20, 2.88, 3.00, 3.10],
//   // function didalam object disebut method
//   ipkumulatif : function() {
//     var hasil = 0;
//     var ips = this.ipsemester;
//     for ( var i = 0; i < ips.length; i++ ) {
//       hasil = ips[i];
//     }
//     return hasil/ips.length;
//   }
// };

var idn = {
 // properties
  nama : 'Eren',
  umur : 22,
  pekerjaan : 'Pasukan Pengintai',
  // method
  sapa : function() {
    return 'Hai Nama Saya : ' + this.nama + ' \nSaya Berumur : ' + this.umur + ' Tahun \nDan Pekerjaan Saya : ' + this.pekerjaan
  },
  
  alamat : {
    jalan : 'Winston',
    kota : 'Wall shiganshina',
    provinsi : 'paradise'
  }
};
console.log(idn.sapa());
