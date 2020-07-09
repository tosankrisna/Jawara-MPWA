function savedMatch(data) {
    console.log(data)
    return `
        <div class="col s12 m6 l4 center">
            <a href="./detail-match.html?id=${data.id}&saved=true">
                <div class="card match-card waves-effect waves-dark">
                    <div class="card-content">
                        <h5 class="club-name">${data.homeTeamName.replace('FC', '')}</h5>
                        <p>vs</p>
                        <h5 class="club-name">${data.awayTeamName.replace('FC', '')}</h5>
                    </div>
                </div>
            </a>
        </div>
    `;
}