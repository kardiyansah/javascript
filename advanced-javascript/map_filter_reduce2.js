// Ambil semua data videos
              // mengubah nodelist menjadi array
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Hanya pilih yang javascript lanjutan
let advancedJs = videos.filter( video => video.textContent.includes('JAVASCRIPT LANJUTAN') )

// Ambil durasi tiap video
 .map( video => video.dataset.duration )

// Ubah durasi dari string menjadi int, ubah menit menjadi detik
 .map( time => {
    // Memecah string menjadi array & merubah string menjadi int
    const parts = time.split(':').map( part => parseFloat(part) );
    return parts[0] * 60 + parts[1];
 })

// Jumlahkan semua detiknya
 .reduce( (total, second) => total + second, 0 );

// Ubah formatnya menjadi jam:menit:detik
const hours = Math.floor(advancedJs / 3600);
advancedJs = advancedJs - hours * 3600;
const minutes = Math.floor(advancedJs / 60);
advancedJs = advancedJs - minutes * 60;
const seconds = advancedJs;
// const minutes = Math.floor((advancedJs - hours * 3600) / 60);
// const seconds = advancedJs - (hours * 3600 + minutes * 60);

// Simpan ke element HTML
const pDuration = document.querySelector('.total-duration');
pDuration.innerHTML = `${hours} jam, ${minutes} menit, ${seconds} detik`;

const totalVideos = videos.filter( video => video.textContent.includes('JAVASCRIPT LANJUTAN') ).length;
const pVideos = document.querySelector('.total-videos');
pVideos.innerHTML = totalVideos;