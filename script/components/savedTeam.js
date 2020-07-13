import { urlConvert } from '../helper/convertData.js';

function savedTeam(data) {

    const preloader = document.querySelector('.loader-team-fav');
    preloader.style.display = 'none';
    
    return `
        <div class="col s12 m4 l3">
            <div class="card team-card waves-effect waves-block waves-dark">
                <div class="card-image">
                    <img src=${urlConvert(data.crestUrl)} alt=${data.teamName}>
                    <a class="btn-floating halfway-fab waves-effect waves-light amber darken-3 btn-team-delete" data-id="${data.id}">
                        <i class="material-icons">delete</i>
                    </a>
                </div>
                <div class="card-content">
                    <p class="card-title center">${data.teamName.replace('FC', '')}</p>
                </div>
            </div>
        </div>
    `;
}

export default savedTeam;