// jenis-jenis method pada array

// 1. length
// length berfungsi untuk mengetahui jumlah element di dalam array
// var arr = ['eren', 'erwin', 'levi'];
// console.log(arr.length);

// 2.join
// join berfungsi untuk mengubah element-element pada pada array menjadi sebuah string
// var arr = ['eren', 'erwin', 'levi'];
         // (tanda yang memisahkan element-element pada string)
// console.log(arr.join(' - '));

// 3.push, pop, unshift, shift
// var arr = ['eren', 'erwin', 'levi'];
// •push digunakan untuk menambah element baru pada akhir arraynya(boleh lebih dari satu)
// arr.push('tahir', 'kardi');
// console.log(arr);

// •pop digunakan untuk menghapus element pada akhir array
// arr.pop();
// console.log(arr);

// •unshift digunakan untuk menambah element baru pada awal arraynya(boleh lebih dari satu)
// arr.unshift(1, 2);
// console.log(arr);

// •shift digunakan untuk menghapus element pada awal array
// arr.shift();
// console.log(arr);

// 4.slice and splice
// var arr = ['eren', 'erwin', 'levi', 'hange'];
// •slice(mengiris / memotong)
// slice(indexAwal(terbawa), indexAkhir(tidak terbawa))
// array lama masih bisa diakses dan tidak ada perubahan pada array yang lama
// var arr2 = arr.slice(1, 3);
// console.log(arr2);


// •splice(menyambung)
// splice(mulaiDariIndexKeberapa, mauDihapusBerapa, elementBaru(boleh lebih dari satu))
// arr.splice(1, 2, 'kardtzy', 10);
// console.log(arr);

// 5.forEach and map
// var arr = ['eren', 'erwin', 'levi', 'hange'];
// var angka = [2, 11, 20, 3, 1, 5, 8];
// •forEach digunakan untuk looping
// arr.forEach(function(e, i) {
//   console.log('tentara ke - ' + (i+1) + ' bernama ' + e);
// });

// •map digunakan untuk looping tapi punya nilai return
// var angka2 = angka.map(function(e) {
//   return e * 2;
// });
// console.log(angka2);

// 6.sort
// var angka = [2, 11, 20, 3, 1, 5, 8];
// sort berfungsi mengurutkan isi array
// angka.sort(function(a, b) {
//   return a - b;
// });
// console.log(angka);

// 7.filter and find
var angka = [2, 11, 20, 3, 1, 5, 8];
// •filter digunakan untuk mencari nilai didalam array bisa mengembalikan lebih dari satu nilai(dalam bentuk array)
var angka2 = angka.filter(function(e) {
  return e > 1 && e < 11
});
console.log(angka2.join(' - '));

// •find digunakan untuk mencari nilai didalam array tapi hanya bisa mengembalikan 1 nilai(langsung mengembalikan nilainya)
var angka3 = angka.find(function(e) {
  return e > 5 && e < 20
});
// console.log(angka3);