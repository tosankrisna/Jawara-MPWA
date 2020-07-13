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
    "endpoint": "https://fcm.googleapis.com/fcm/send/evjnYMfIyIw:APA91bFIk46vWwjidlB61rWJGXXyMW-4pMjDyT_Q_sg9OVa0nUVzX7zf-cujTysyda5WYT1hrHU0V1AmYsuvDXjI1pFzRsg4g7tL9o-uLGuCQM2nP9Ot3SbCUAz_Djnp-KBTrlPS98tx",
    "keys": {
        "p256dh": "BO5p7gGm/EwjORntEBOZlep5zFnE4QJobf1d+FWylA1vPDCxFvDIj9V0zvN69Xl7FQsoRf53t/8Se4l7Q0LJY00=",
        "auth": "3PZXCeI1qO4ODLv+CvJJ/w=="
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