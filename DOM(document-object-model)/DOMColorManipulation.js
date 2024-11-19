// Manipulasi Menggunakan Toggle
const button = document.getElementById('bChangeColor');
button.onclick = function() {
    // document.body.style.backgroundColor = 'purple';
    // document.body.setAttribute('class', 'cPurple');
    document.body.classList.toggle('cPurple');
}


const bRandomColor = document.createElement('button');
const textbRandomColor = document.createTextNode('Random Color');
bRandomColor.append(textbRandomColor);
bRandomColor.setAttribute('type', 'button');
button.after(bRandomColor);
// Manipulasi Menggunakan Math.random()
bRandomColor.addEventListener('click', function() {
  
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
});


// Manipulasi Menggunakan Slider
const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');
sRed.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    const number = document.getElementsByClassName('example')[0];
    number.innerHTML = sRed.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
sGreen.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    const number = document.getElementsByClassName('example')[1];
    number.innerHTML = sGreen.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
sBlue.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    const number = document.getElementsByClassName('example')[2];
    number.innerHTML = sBlue.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});


// Manipulasi Menggunakan Event Mouse
document.body.addEventListener('mousemove', function(event) {
   
    // mencari tahu posisi mouse
    // console.log(event.clientX);
    // console.log(event.clientY);
  
    // mencari tahu lebar dan tinggi layar
    // console.log(window.innerWidth);
    // console.log(window.innerHeight); 
    
    xPos = Math.round((event.clientX / window.innerWidth) * 255 );
    yPos = Math.round((event.clientY / window.innerHeight) * 255 );
    random = Math.round(Math.random() * 255 + 1 );
    
    console.log(xPos + ' ' + yPos);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, ${random})`;
    
});
