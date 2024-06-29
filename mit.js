// Fungsi untuk mengirim informasi ke pedomanmedia.github.io/informasi.html
function sendInfo() {
    var infoElement = document.createElement('div');
    infoElement.id = 'info';
    infoElement.innerHTML = 'Informasi dari https://pedoman.media/account';

    // Kirim pesan ke iframe
    var iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.contentWindow.postMessage({ info: infoElement.innerHTML }, 'https://pedomanmedia.github.io');
    }

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
