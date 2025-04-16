// Mengambil informasi perangkat
const deviceInfo = navigator.userAgent;

// Menyimpan informasi perangkat ke localStorage
let devices = JSON.parse(localStorage.getItem('devices')) || [];
if (!devices.includes(deviceInfo)) {
    devices.push(deviceInfo);
    localStorage.setItem('devices', JSON.stringify(devices));
}
