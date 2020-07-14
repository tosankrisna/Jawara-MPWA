const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BJhmFAikmq5vcK_aV0TKuhl8Y2YE9m-pafIR3jrAZ58o2ofhaIa48CFv7T9IB8cPFSDiJ6MhnXgDuxIR6g8bfHY",
    "privateKey": "Cm-IxvCmCVQ5y8eeXzsycrzlaCiapk4B5kVmu5XRPmw"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dXaW5v_6dcI:APA91bH_6sMy2rXgDsge7WzThs8LE1HLUEINL9FvzQD_oCsb6VcKPApCznc0iegew0pa8xoBMCPuT7XaHY-Z6o3K6uT37fG6hZwEyDIyB2DwoxlFXlfQZnKlngeufLfRVA3oxJvTIBHa",
    "keys": {
        "p256dh": "BNeohfEDl4nhWS1MS41iFZEZ4pjbBVnzlyL2nk3TN+U7S7RefNCA226uqCovYWfL/v/RW9krQpJ4hBCHXsrIxYc=",
        "auth": "EBqRlbgHhnPMkD/dlXMiig=="
    }
};

const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
const options = {
   gcmAPIKey: '191938290627',
   TTL: 60
};

webPush.sendNotification(
   pushSubscription,
   payload,
   options
);