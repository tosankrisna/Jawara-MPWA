import { urlConvert } from '../helper/convertData.js';

function teams(data) {  
    
    const preloader = document.querySelector('.loader-team');
    preloader.style.display = 'none';

    return `
        <div class="col s12 m4 l3">
            <div class="card team-card waves-effect waves-dark">
                <div class="card-image">
                    <img src=${urlConvert(data.crestUrl)} alt=${data.name}>
                    <a class="btn-floating halfway-fab waves-effect waves-light amber darken-3 btn-saved-team" data-team="${encodeURIComponent(JSON.stringify(data))}">
                        <i class="material-icons">favorite_border</i>
                    </a>
                </div>
                <div class="card-content">
                    <p class="card-title center">${data.name.replace('FC', '')}</p>
                    <p class="hide center amber">Tersimpan di favorit</p>
                </div>
            </div>
        </div>
    `;
}

export default teams;