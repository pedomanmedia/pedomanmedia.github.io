  function loadExternalScript() {
    var scriptUrl = document.getElementById('scriptUrl').value;
    var script = document.createElement('script');
    script.src = scriptUrl;
    document.head.appendChild(script);
window.open(window.location.href, '_blank'); // Membuka URL yang sama di tab baru  	
location.reload(); // Reload halaman saat ini	
}, 300); // Reload setiap 30 detik
