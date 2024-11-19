// const close = document.getElementsByClassName('close')[0];
// const card = document.getElementsByClassName('card')[0];

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
const allClose = document.querySelectorAll('.close');

// for( let i = 0; i < allClose.length; i++ ) {
//     allClose[i].addEventListener('click', function(e) {
        
//         // allClose[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
        
//     });
// }

// forEach hanya bisa digunakan oleh kumpulan node bertipe nodeList dan tidak bisa digunakan oleh HTMLCollection




// allClose.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         // Suatu Method Yang Ada DiDalam Object(e) berfungsi mencegah aksi deafault dari element
//         e.preventDefault();
//         // Suatu Method Yang Ada DiDalam Object(e) berfungsi mencegah event bubbling
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });




// DOM Traversal Method
// 1.parentNode => Mengembalikan node ( spasi juga dihitung sebagai node)
// 2.parentElement => element
// 3.nextSibling =>  node
// 4.nextElementSibling => element
// 5.previousSibling => node
// 6.previousElementSibling => element

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);


const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if ( e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});