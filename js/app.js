// Detectar si el navegador soporta Service Worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Service Worker Registered', registrado))
        .catch( error => console.log('Service Worker not Registered', error));
} else{
    console.log('Service Worker not supported');
}

