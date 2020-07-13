function requestPermission() {
    Notification.requestPermission().then((result) => {
        if (result === 'denied') {
            console.log('Fitur notifikasi tidak diijinkan');
            return;
        } else if (result === 'default') {
            console.log('Pengguna menutup kotak dialog permintaan ijin');
            return;
        }

        console.log('Fitur notifikasi diijinkan');
    })
}

export default requestPermission;