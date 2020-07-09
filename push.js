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
    "endpoint": "https://fcm.googleapis.com/fcm/send/djoF0v-v2rU:APA91bFLzayiRVyQCKEVeQT3IFvNlJDqPtNTGD1NxxqQVi9rvl4A1PueZptm2gxjvfwOeR80Byf5d9M_LVGRPVVVkmHc499DOnfhviCkr7B7OaR3TvRQSfXn-Z-ku0_48hvBsU2K8Oz1",
    "keys": {
        "p256dh": "BBflGONZyUSM3sqOy4Q/49+N+PLxkokhQmWK1e+4Q+cjJc58ktDWw2D5Qn+omq4mact8gTNM4+b95LlARfC1JfU=",
        "auth": "Ystvp8zmYpyi8f9OSLlhXg=="
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