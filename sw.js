const nombreCache = 'apv-v1';
// Cachear archivos
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
]

// Instalar el Service Worker
self.addEventListener('install', e => {
    console.log('Service Worker: Instalado');
    
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('Service Worker: Cachando Archivos');
                cache.addAll(archivos);
            })
    )
})

// Activar el Service worker
self.addEventListener('activate', e => {
    console.log('Service Worker: Activado');
    console.log(e);
})

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetch', e);
    console.log(e.request.url);
})
