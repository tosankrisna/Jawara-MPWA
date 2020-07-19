import { base_url, token, status, json, error } from './api.js';
import { saveTeamForLater } from '../database/dbTeam.js';
import team from '../components/team.js';

function getTeam() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/teams`).then((response) => {
            if (response) {
                response.json().then((data) => {
                    let teamHTML = '';

                    data.teams.forEach((teams) => {
                        teamHTML += team(teams);
                    });

                    document.querySelector('.team-data').innerHTML = teamHTML;

                    for(let i = 0; i < data.teams.length; i++) {
                        const btnSavedTeam = document.querySelectorAll('.btn-saved-team')[i];
                        const hideElems = document.querySelectorAll('.hide')[i];

                        btnSavedTeam.addEventListener('click', () => {
                            const data = JSON.parse(decodeURIComponent(btnSavedTeam.getAttribute('data-team')));

                            saveTeamForLater(data);
                            btnSavedTeam.classList.add('disabled');
                            hideElems.classList.remove('hide');
                        })
                    }
                });
            }
        });
    }

    fetch(`${base_url}competitions/2021/teams`, {
        headers: {
            'X-Auth-Token': token
        }
    })
    .then(status)
    .then(json)
    .then((data) => {
        let teamHTML = '';
        
        data.teams.forEach((teams) => {
            teamHTML += team(teams);
        });
        
        document.querySelector('.team-data').innerHTML = teamHTML;

        for(let i = 0; i < data.teams.length; i++) {
            const btnSavedTeam = document.querySelectorAll('.btn-saved-team')[i];
            const hideElems = document.querySelectorAll('.hide')[i];

            btnSavedTeam.addEventListener('click', () => {
                const data = JSON.parse(decodeURIComponent(btnSavedTeam.getAttribute('data-team')));

                saveTeamForLater(data);
                btnSavedTeam.classList.add('disabled');
                hideElems.classList.remove('hide');
            })
        }

    })
    .catch(error);
}

export default getTeam;