// Fungsi untuk mengirim informasi ke pedomanmedia.github.io/informasi.html
function sendInfo() {
    var infoElement = document.createElement('div');
    infoElement.id = 'info';
    infoElement.innerHTML = 'Informasi dari https://pedoman.media/account';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://pedomanmedia.github.io/informasi.html', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify({ info: infoElement.innerHTML }));

    document.body.appendChild(infoElement);
}

// Cek apakah script ini dijalankan di https://pedoman.media/account
if (window.location.hostname === 'pedoman.media' && window.location.pathname === '/account') {
    // Cek apakah halaman di-reload
    if (window.performance && performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        console.info("Halaman di-reload");
        sendInfo();
    } else {
        console.info("Halaman tidak di-reload");
    }

    // Tambahkan event listener untuk mendeteksi reload
    window.addEventListener('beforeunload', function (event) {
        sendInfo();
    });
}
