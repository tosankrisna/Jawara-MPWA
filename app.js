import { loadNav, loadPage } from './script/view/main.js';
import requestPermission from './script/helper/requestPermission.js';
import registerServiceWorker from './script/helper/serviceWorkerRegister.js';
import { urlBase64ToUint8Array } from './script/helper/convertData.js';

document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelector('.sidenav');
    M.Sidenav.init(elems);
    loadNav();

    let page = window.location.hash.substr(1);
    if (page === '') page = 'beranda';
    loadPage(page);

    if(!('serviceWorker' in navigator)) {
        console.error('ServiceWorker: Browser tidak mendukung!');
    } else {
        registerServiceWorker();
    }
    
    if ('Notification' in window) {
        requestPermission();
    } else {
        console.log('Browser tidak mendukung fitur notifikasi');
    }

    navigator.serviceWorker.ready.then(() => {
        if (('PushManager' in window)) {
            navigator.serviceWorker.getRegistration().then((registration) => {
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array('BJhmFAikmq5vcK_aV0TKuhl8Y2YE9m-pafIR3jrAZ58o2ofhaIa48CFv7T9IB8cPFSDiJ6MhnXgDuxIR6g8bfHY')
                }).then((subscribe) => {
                    console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                    console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                        null, new Uint8Array(subscribe.getKey('p256dh'))
                    )));
                    console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                        null, new Uint8Array(subscribe.getKey('auth'))
                    )));
                }).catch((e) => {
                    console.log('Tidak dapat melakukan subscribe ', e.message);
                });
            });
        }
    })
    
})