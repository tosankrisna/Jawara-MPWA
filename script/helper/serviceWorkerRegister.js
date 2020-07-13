function registerServiceWorker() {
    return navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
            console.log(
                'ServiceWorker: Pendaftaran berhasil. Scope: ',
                registration.scope
            );
            return registration;
        })
        .catch((error) => {
            console.error('ServiceWorker: Pendaftaran gagal. Error: ', error);
        });
}

export default registerServiceWorker;