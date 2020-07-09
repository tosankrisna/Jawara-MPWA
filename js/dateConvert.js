const dateConvert = date => {
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

    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} / ${date.toLocaleString('id-ID', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
}