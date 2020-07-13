export function dateConvert(date) {
    const month = [
        "Januari", 
        "Februari", 
        "Maret", 
        "April", 
        "Mei", 
        "Juni",
        "Juli", 
        "Agustus", 
        "September", 
        "Oktober", 
        "November", 
        "Desember"
    ];

    return `
        ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} / ${date.toLocaleString('id-ID', { hour: 'numeric', minute: 'numeric', hour12: true })}
    `;
}

export function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    
    return outputArray;
}

export function urlConvert(url) {
    return url.replace(/^http:\/\//i, 'https://');
}