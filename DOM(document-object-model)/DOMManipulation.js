// DomManipulation manipulation element
// innerHTML digunakan untuk mengganti text node pada element HTML, dan juga bisa digunakan untuk menambahkan element HTML baru.
const heading = document.getElementById('judul');
heading.innerHTML = '<em>MichaelOwen</em>';

// // element.style.<Nama Property>, digunakan untuk memanipulasi css pada element yang ditarget dan juga tidak sarankan untuk menambahkan attribute (class) menggunakan method ini.
const p1 = document.getElementsByTagName('p')[0];
p1.style.color = 'limegreen';
p1.style.backgroundColor = '#fff';

// element.getAttribute(), element.setAttribute(), element.removeAttribute(), digunakan untuk memanipulasi attribute pada element yang ditarget.
const a = document.querySelector('section#a a');
// element.getAttribute(), berfungsi sebagai untuk mengetahui value dari suatu attribute
// element.getAttribute('Nama attribute') returnnya adalah mengembalikan value dari attribute yang ditarget.
a.getAttribute('href');

const p2 = document.getElementsByClassName('p2')[0];
// element.setAttribute(), berfungsi untuk menambahkan attribute pada element
// element.setAttribute('Nama attribute', 'Value attribute').
p2.setAttribute('id', 'tes');

// removeAttribute(), digunakan untuk menghapus attribute pada element
// element.removeAttribute('Nama attribute').
a.removeAttribute('href');

// element.classList, digunakan untuk memanipulasi class pada element
const p3 = document.querySelector('.p3');

// element.classList.add(), digunakan untuk menambahkan class pada element, boleh lebih dari satu
// element.classList.add('Nama class1', 'Nama class2', .......).
p3.classList.add('king', 'queen');

// element.classList.remove(), digunakan untuk menghapus class pada element, boleh lebih dari satu
// element.classList.remove('Nama class1', 'Nama class2', .......).
p3.classList.remove('king', 'queen');

// element.classList.toggle(), digunakan menghapus dan menambahkan class pada element
// element.classList.toggle('Nama class').
p3.classList.toggle('white');

// element.classList.item(), digunakan untuk menampilkan nama class
// element.classList.item(index classnya, dimulai dari 0).
p3.classList.item(0);

// element.classList.contains(), menanyakan nama class, returnnya mengembalikan nilai true or false
// element.classList.contains('Nama class').
p3.classList.contains('white');

// element.classList.replace(), digunakan untuk mengganti nama class yang lama dengan nama class yang baru
// element.classList.replace('Nama class yang lama', 'Nama class yang baru').
p3.classList.replace('white', 'blue');