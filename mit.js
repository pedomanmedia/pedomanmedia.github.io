// Fungsi untuk mengirim informasi ke web2saya.com
function sendInfo() {
    var infoElement = document.createElement('div');
    infoElement.id = 'info';
    infoElement.innerHTML = 'Informasi dari https://pedoman.media/account';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://web2saya.com/receive_info', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify({ info: infoElement.innerHTML }));

    document.body.appendChild(infoElement);
}

// Cek apakah script ini dijalankan di websitesaya.com
if (window.location.hostname === 'https://pedomanmedia.github.io/informasi.html') {
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
