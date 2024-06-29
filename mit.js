self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).then(function(response) {
            // Pastikan response adalah objek Response yang valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }

            // Clone the response
            var responseToCache = response.clone();

            // Cache the response
            caches.open('my-cache').then(function(cache) {
                cache.put(event.request, responseToCache);
            });

            return response;
        }).catch(function() {
            // Handle fetch error
            return caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            });
        })
    );
});


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
