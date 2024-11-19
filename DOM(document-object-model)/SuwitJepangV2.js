function getPilihanComputer() {
    const comp = Math.random();
    if ( comp < 0.34 ) return 'batu';
    if ( comp >= 0.34 && comp < 0.67 ) return 'gunting';
    return 'kertas';
}

function getRules(comp, player) {
    if ( player == comp ) return 'SERI!';
    if ( player == 'batu' ) return ( comp == 'kertas' ) ? 'KALAH!' : 'MENANG!';
    if ( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
    if ( player == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH!' : 'MENANG!';
}

function putar() {
    const pilComp = document.querySelector('.img-komputer');
    const img = ['batu', 'gunting', 'kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if ( new Date().getTime() - waktuMulai > 1500) {
            clearInterval();
            return;
        }
        pilComp.setAttribute('src', `img/${img[i++]}.png`);
        if ( i == img.length ) i = 0;
        
    }, 100);
}



const img = document.querySelectorAll('.area-player ul li img');
img.forEach(function(e) {
    e.addEventListener('click', function() {
        const comp = getPilihanComputer()
        const getPilihanPlayer = function() {
            if ( e.className == 'gajah') return 'batu';
            if ( e.className == 'orang') return 'gunting';
            return 'kertas';
        }
        const result = getRules(comp, getPilihanPlayer());
       
        const info = document.querySelector('.info');
        info.innerHTML = '';
        
        putar()
        
        
        setTimeout(function() {
            const pilComp = document.querySelector('.img-komputer');
            pilComp.setAttribute('src', `img/${comp}.png`);
        
            info.innerHTML = result;
            
        }, 1500);
    })
});