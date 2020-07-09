function latestJadwal(team) {

    const preloader = document.querySelector('.loader');
    preloader.style.display = 'none';

    return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-content center">
                    <h6><a href="../detail-club.html?id=${team.homeTeam.id}" class="club-name">
                        ${team.homeTeam.name.replace('FC', '')}
                    </a></h6>
                    <h5>${team.score.fullTime.homeTeam}</h5>
                    <span>-</span>
                    <h5>${team.score.fullTime.awayTeam}</h5>
                    <h6><a href="../detail-club.html?id=${team.awayTeam.id}" class="club-name">
                        ${team.awayTeam.name.replace('FC', '')}
                    </a></h6>
                </div>
                <div class="card-action center">
                    <h6>Match Day ${team.matchday}</h6>
                </div>
            </div>
        </div>
    `;
}

