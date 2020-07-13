import { base_url, token, status, json, error } from './api.js';
import klasemen from '../components/klasemen.js';

function getKlasemen() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/standings?standingType=TOTAL`).then((response) => {
            if (response) {
                response.json().then((data) => {
                    let klasemenHTML = '';

                    data.standings.forEach((teams) => {
                        teams.table.forEach((team) => {
                            klasemenHTML += klasemen(team);
                        })
                    });

                    document.querySelector('.body-klasemen').innerHTML = klasemenHTML;
                });
            }
        });
    }

    fetch(`${base_url}competitions/2021/standings?standingType=TOTAL`, {
        headers: {
            'X-Auth-Token': token
        }
    })
    .then(status)
    .then(json)
    .then((data) => {
        let klasemenHTML = '';
        data.standings.forEach((teams) => {
            teams.table.forEach((team) => {
                klasemenHTML += klasemen(team);
            })
        });

        document.querySelector('.body-klasemen').innerHTML = klasemenHTML;
    })
    .catch(error);
}

export default getKlasemen;