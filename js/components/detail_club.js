function detailClub(data) {

    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';

    return `
        <div class="col s12 center club-item">
            <div class="card-panel panel-club">
                <img src=${data.crestUrl} alt="${data.name}" class="club-logo">
                <h5>${data.name} (${data.tla})</h5>
                <h6>${data.founded}</h6>
                <p>${data.venue}</p>
                <p>${data.phone !== null ? data.phone : '-'}</p>
                <p>${data.address}</p>

                <a href=${data.website} class="web-link" target="_blank">
                    Kunjungi website club
                </a>
            </div>
        </div>
    `;
}