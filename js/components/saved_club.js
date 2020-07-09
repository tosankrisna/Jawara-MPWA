function savedClub(data) {
    return `
        <div class="col s12 m4 l3">
            <a href="./detail-club.html?id=${data.id}&saved=true">
                <div class="card club-card waves-effect waves-dark">
                    <div class="card-image">
                        <img src=${data.crestUrl} alt=${data.name}>
                    </div>
                    <div class="card-content">
                        <p class="card-title center">${data.name.replace('FC', '')}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
}