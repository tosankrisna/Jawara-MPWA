import { dateConvert } from '../helper/convertData.js';

function jadwal(team) {

    const preloader = document.querySelector('.loader-jadwal');
    preloader.style.display = 'none';
    
    return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image center">
                    <div class="card-content">
                        <p class="match-content">
                            <span class="team-name">${team.homeTeam.name.replace('FC', '')}</span>
                            <span>vs</span>
                            <span class="team-name">${team.awayTeam.name.replace('FC', '')}</span>
                        </p>
                        <p>${dateConvert(new Date(team.utcDate))}</p>
                        <a class="btn-floating halfway-fab waves-effect waves-light amber darken-3 btn-saved-jadwal" data-match="${encodeURIComponent(JSON.stringify(team))}"><i class="material-icons">favorite_border</i></a>
                    </div>
                </div>
                <div class="card-action center matchday">
                    <h6>Match Day ${team.matchday}</h6>
                </div>
            </div>
        </div>
    `;
}

export default jadwal;