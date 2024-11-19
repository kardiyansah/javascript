// DomManipulation manipulation node

// document.createElement('Tag HTML'), digunakan untuk membuat node element.
const pNew = document.createElement('p');
// document.createTextNode('text'), digunakan untuk membuat node text.
const contentPNew = document.createTextNode('Paragraf Yang Baru Dibuat');
// nameNode.appendChild(nama node yang akan dimasukan kedalam), digunakan untuk menggabungkan nodeElement dan nodeTextNode, dan juga bisa digunakan untuk menempatkan element baru keindex HTML dengan menangkap element parentnya.
pNew.appendChild(contentPNew);
const sectionA = document.getElementById('a');
sectionA.appendChild(pNew);

// parentNode.insertBefore(nodeBaru, nodeSetelahnya), digunakan untuk menempatkan element baru keindex HTML dengan menangkap element parent dan childElement yang ditarget.
const newLi = document.createElement('li');
// menggunakan innerHTML sebagai pengganti createTextNode
newLi.innerHTML = 'Item Baru Dibuat';
// const contentNewLi = document.createTextNode('Item Baru');
// newLi.appendChild(contentNewLi);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(newLi, li2);

// parentNode.removeChild(element yang ditarget), digunakan untuk manghapus element pada HTML.
const a = document.getElementsByTagName('a')[0];
sectionA.removeChild(a);

// parentNode.replaceChild(nodeBaru, Node lama), digunakan untuk mengganti node lama dengan node yang baru.
const sectionB = document.querySelector('#b');
const p4 = sectionB.getElementsByTagName('p')[0];
const newH2 = document.createElement('h2');
const textNewH2 = document.createTextNode('Judul Yang Baru Dibuat');
newH2.appendChild(textNewH2);
sectionB.replaceChild(newH2, p4);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// parentNode.append(nodeBaru), digunakan untuk menempatkan element baru diakhir.
const newA = document.createElement('a');
newA.setAttribute('href', '#');
const textNewA = document.createTextNode('Link Baru');
newA.append(textNewA);
// sectionA.append(newA);

// parentNode.prepend(nodeBaru), digunakan untuk menempatkan element baru awal.
// sectionA.prepend(newA);

// childNode.before(nodeBaru), digunakan untuk menempatkan element baru sebelum childNode yang ditarget.
const p1 = document.getElementsByClassName('p1')[0];
// p1.before(newA);

// childNode.after(nodeBaru), digunakan untuk menempatkan element baru setelah childNode yang ditarget.
// p1.after(newA);

// elementYangMauDihapus.remove(tidakAdaParameter), digunakan untuk menghapus element yang ditarget.
// newA.remove();

// nodeLama.replaceWith(nodeBaru), digunakan untuk mengganti nodeLama dengan nodeYangBaru.
p1.replaceWith(newA);

