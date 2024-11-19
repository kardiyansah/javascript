// Cara Mendengarkan Event

// 1.Event Hendler
// -Inline HTML Attribute
const p3 = document.getElementsByClassName('p3')[0];
function changeColor() {
    p3.style.backgroundColor = 'limegreen';
}

// -Element method, tidak boleh lebih dari satu event.
const p2 = document.querySelector('.p2');
p2.onmouseenter = function() {
    p2.style.backgroundColor = 'purple';
    p2.style.color = 'red';
}
p2.onmouseleave = function() {
    p2.style.backgroundColor = '#000';
    p2.style.color = '#fff';
}

// 2.addEventListener(), boleh lebih dari satu event.
const p4 = document.getElementsByTagName('p')[3];
p4.addEventListener('click', function() {
    
    const ul = document.querySelector('section#b ul');
    const newLi = document.createElement('li');
    const textNewLi = document.createTextNode('Item Baru');
    newLi.append(textNewLi);
    ul.append(newLi);
    
});