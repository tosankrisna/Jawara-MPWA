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
    "endpoint": "https://fcm.googleapis.com/fcm/send/ebV3OHX211M:APA91bFhMJXHo1T61uGxN18r_CGSLSRYXNlMBAl2WeC0cxcdlt5TvY6zhb1rF-S_MECgM1XUhSV9XbQTKNUaHII_97F5sSUeDQJhOIPkt9AqeHNS5T9cPkRYC_6D6Vlirun6qn59oRIJ",
    "keys": {
        "p256dh": "BGMi7oXQyl46ADivjFL2BjkDvv4lDUkxkxBXLOEoQlL1Nwe5VSVeE9iBPDlRXg+FNtg8pJ1DHXxuWRFbtgczKeA=",
        "auth": "MP30VXXuFzv1cKggqd92LA=="
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