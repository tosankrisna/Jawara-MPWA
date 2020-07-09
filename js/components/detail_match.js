function detailMatch(data) {
    
    return `
        <div class="col s12 center club-item">
            <div class="card-panel panel-club">
                <h5>
                    <a href="detail-club.html?id=${data.match.homeTeam.id}">
                        <span class="club-name">${data.match.homeTeam.name.replace('FC', '')}</span>
                    </a>
                    <span>vs<span>
                    <a href="detail-club.html?id=${data.match.awayTeam.id}">
                        <span class="club-name">${data.match.awayTeam.name.replace('FC', '')}</span>
                    </a>
                </h5>
                <h6>Premier League Matchday ${data.match.matchday}</h6>
                <h6>${dateConvert(new Date(data.match.utcDate))}</h6>
                <h6 class="venue">${data.match.venue}</h6>

                <h6 class="statistik">Statistik Kesebelasan</h6>
                <p>
                    ${data.head2head.homeTeam.name.replace('FC', '')} 
                    :
                    ${data.head2head.homeTeam.wins}W
                    ${data.head2head.homeTeam.draws}D
                    ${data.head2head.homeTeam.losses}L
                </p>
                <p>
                    ${data.head2head.awayTeam.name.replace('FC', '')} 
                    : 
                    ${data.head2head.awayTeam.wins}W
                    ${data.head2head.awayTeam.draws}D
                    ${data.head2head.awayTeam.losses}L
                </p>
            </div>
        </div>
    `;

}