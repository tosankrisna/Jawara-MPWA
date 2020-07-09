function jadwal(team) {

    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
    
    return `
        <div class="col s12 m6">
            <a href="../detail-match.html?id=${team.id}">
                <div class="card">
                    <div class="card-content center">
                        <p class="match-content">
                            <span class="club-name">${team.homeTeam.name.replace('FC', '')}</span>
                            <span>vs</span>
                            <span class="club-name">${team.awayTeam.name.replace('FC', '')}</span>
                        </p>
                        <p class="date">Tanggal/Waktu : ${dateConvert(new Date(team.utcDate))}</p>
                    </div>
                    <div class="card-action center matchday">
                        <h6>Match Day ${team.matchday}</h6>
                    </div>
                </div>
            </a>
        </div>
    `;
}

