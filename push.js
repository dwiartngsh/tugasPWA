var webPush =  require('web-push');

const vapidKeys = {
    "publicKey": "BAvADh0Q_TeCXO2vNlA_3wLvpoL3xAUz4hqvdoiW1VQ4P4DERCATFjMHYOjjLXPz84jPusoB2hiTWXdgTHHJZ7s",
    "privateKey": "Jcva2vKOSmh-NJ3Uct7WZ8WQGF8F2nUp3j2vaaBJz04"
};

webPush.setVapidDetails(
    'mailto:dwiartiningsih98@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/et9c__UVhy0:APA91bFL4UjbSF_WRvK5X48rA05YMj6s1CkdAZFO0hYe_pZaYQn2VFeGEihv5UDD7pFbEW1hLVsF11rniR680MwVatxocEnLVd_UfTFA4frvlL6uzP4UgQThl-R1EhmbJVLIg6GM-0Yb",
    "keys": {
        "p256dh": "BNjaH8i/JtT484eFmifZ7/4qboiGzKwYbcN+7lO1MKW1IieVNfBcpna4eKCY0+pTrF9tgHTtlnLq88IAufrFGuQ=",
        "auth": "/EetvF+A/KSQ0347rl/zHQ=="
    }
};

var payload = 'Selamat! Aplikasi anda sudah dapat menerima push notifikasi';

var options = {
    gcmAPIKey: '830923740262',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);