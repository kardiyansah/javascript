// Jenis-jenis Object
// 1.object literal
// context this pada object literal adalah mengembalikan object global/window
var idn = {
  nama : 'levi',
  umur : 39,
  pekerjaan : 'kopral'
};

// 2.Menggunakan Function Declaration
// context this pada function declaration adalah mengembalikan object yang bersangkutan
function buatIdentitas(nama, umur, pekerjaan) {
  var idn = {};
  idn.nama = nama;
  idn.umur = umur;
  idn.pekerjaan = pekerjaan;
  return idn;
}
idn2 = buatIdentitas('naruto', 21, 'ninja');

// 3.Menggunakan Function Constructor Harus Menggunakan Keyword(new) Saat Digunakan
// context this pada function constructor adalah mengembalikan object yang baru dibuat
function Identitas(nama, umur, pekerjaan) {
  this.nama = nama;
  this.umur = umur;
  this.pekerjaan = pekerjaan;
}

idn3 = new Identitas('luffy', 19, 'bajak laut');

