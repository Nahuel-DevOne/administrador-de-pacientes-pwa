// Instalar el Service Worker
self.addEventListener('install', e => {
    console.log('Service Worker: Instalado');
    console.log(e);
})

// Activar el Service worker
self.addEventListener('activate', e => {
    console.log('Service Worker: Activado');
    console.log(e);
})


