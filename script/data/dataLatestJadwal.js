import { base_url, token, status, json, error } from './api.js';
import latestJadwal from '../components/latestJadwal.js';

function getLatestJadwal() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/matches?status=FINISHED`).then((response) => {
            if (response) {
                response.json().then((data) => {
                    let latestJadwalHTML = '';
                    data.matches.reverse().slice(0, 2).forEach((match) => {
                        latestJadwalHTML += latestJadwal(match);
                    })

                    document.querySelector('.list-match').innerHTML = latestJadwalHTML;    
                })
            }
        })
    }

    fetch(`${base_url}competitions/2021/matches?status=FINISHED`, {
        headers: {
            'X-Auth-Token': token
        }
    })
    .then(status)
    .then(json)
    .then((data) => {
        let latestJadwalHTML = '';

        data.matches.reverse().slice(0, 2).forEach((match) => {
            latestJadwalHTML += latestJadwal(match);
        });

        document.querySelector('.list-match').innerHTML = latestJadwalHTML;
    })
    .catch(error);
}

export default getLatestJadwal;