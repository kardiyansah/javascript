// DOM Selection
// 1.getElementById() => Satu Element
const heading = document.getElementById('judul');
// Merubah Warna Element Lewat Javascript
heading.style.color = 'orange';
// Merubah Background Element
heading.style.backgroundColor = '#fff';
// Merubah Teks Element HTML
heading.innerHTML = 'King And Queen';

// 2.getElementsByTagName() => HTMLCollections, perilakunya mirip array dan memiliki index yang dimulai dari [0]
const allP = document.getElementsByTagName('p');

for ( let i = 0; i < allP.length; i++ ) {
  allP[i].style.backgroundColor = 'purple';
}
// index wajib ditulis walaupun elementnya hanya satu
const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize = '30px';

// 3.getElementsByClassName() => HTMLCollections, Bisa pakai syntax ini jika elementnya hanya satu
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini Editan';

// 4.querySelector() => Satu Element
const p4 = document.querySelector('section#b p');
p4.style.color = '#000';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'salmon';
li2.innerHTML = 'Diubah';

// 5.querySelectorAll() => nodeList, perilakunya mirip array dan memiliki index yang dimulai dari [0]
const allLi = document.querySelectorAll('section#b ul li');
allLi.forEach(function(e) {
  e.style.color = 'yellow';
  e.style.backgroundColor = 'pink';
});

// Merubah nodeRoot(berfungsi sebagai memperkecil scope dari element yang ditarget)
const sectionB = document.getElementById('b');
// Merubah nodeRoot(document) menjadi nodeRoot yang baru dibuat
const elementP = sectionB.getElementsByTagName('p')[0];
elementP.innerHTML = 'Dirubah Dari Javascript';
elementP.style.backgroundColor = 'red';



