import { base_url, token, status, json, error } from './api.js';
import klasemen from '../components/klasemen.js';

function getLatestKlasemen() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/standings?standingType=TOTAL`).then((response) => {
            if (response) {
                response.json().then((data) => {
                    let latestKlasemenHTML = '';

                    data.standings.forEach((teams) => {
                        teams.table.slice(0, 4).forEach((team) => {
                            latestKlasemenHTML += klasemen(team);
                        })
                    });

                    document.querySelector('.body-latest-klasemen').innerHTML = latestKlasemenHTML;
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
        let latestKlasemenHTML = '';
        data.standings.forEach((teams) => {
            teams.table.slice(0, 4).forEach((team) => {
                latestKlasemenHTML += klasemen(team);
            })
        });

        document.querySelector('.body-latest-klasemen').innerHTML = latestKlasemenHTML;
    })
    .catch(error);
}

export default getLatestKlasemen;