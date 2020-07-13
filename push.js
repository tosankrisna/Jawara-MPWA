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
    "endpoint": "https://fcm.googleapis.com/fcm/send/fI0a9c03T4w:APA91bHrIF2_UEr8adKaqglcORqTUGObcSXO_0sV-4kYqY4fqG9ypit4bdpNwEVQYQWfIbIHJaR3fE_XpDAqo_4Oy4fOeIPKRNtrUBzyBdC4O1EHvHR0LqfNU_ZngI4hu_4G5Gn4-vvJ",
    "keys": {
        "p256dh": "BKc+qOdJxTY9X7hDtgD4ki0iBgSlxeDUUeTmBWiZfiLK209TnWeBor6PZk16mFY8grF8EX2Y7xbK9005jDm922Y=",
        "auth": "Rd2+WiBVxFs4ipIGseDz+A=="
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