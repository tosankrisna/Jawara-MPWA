import { dateConvert } from '../helper/convertData.js';

function savedMatch(data) {

    const preloader = document.querySelector('.loader-match-fav');
    preloader.style.display = 'none';

    return `
        <div class="col s12 m6 l4 center">
            <div class="card">
                <div class="card-image center">
                    <div class="card-content">
                        <p class="match-content">
                            <span class="team-name">${data.homeTeamName.replace('FC', '')}</span>
                            <span>vs</span>
                            <span class="team-name">${data.awayTeamName.replace('FC', '')}</span>
                        </p>
                        <p class="date">${dateConvert(new Date(data.utcDate))}</p>
                        <a class="btn-floating halfway-fab waves-effect waves-light amber darken-3 btn-match-delete" data-id="${data.id}"><i class="material-icons">delete</i></a>
                    </div>
                </div>
                <div class="card-action center matchday">
                    <h6>Match Day ${data.matchDay}</h6>
                </div>
            </div>
        </div>
    `;
}

export default savedMatch;