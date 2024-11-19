const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
let eOld = null;

container.addEventListener('click', function(e) {
    if ( e.target.className == 'thumb') {
        
        if ( eOld != null ) {
            eOld.classList.remove('active');
        }
        
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 300);
        
        e.target.classList.add('active');
        eOld = e.target;
        
    }
});

console.log(jumbo.alt);