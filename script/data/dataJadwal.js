import { base_url, token, status, json, error } from './api.js';
import { saveMatchForLater } from '../database/dbMatch.js';
import jadwal from '../components/jadwal.js';

function getJadwal() {
    const dateFrom = new Date(Date.now()).toISOString().slice(0, 10);
    const dateTo = new Date(Date.now() + 6.048e+8).toISOString().slice(0, 10);
    
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`).then((response) => {
            if (response) {
                response.json().then((data) => {
                    let jadwalHTML = '';
                    data.matches.forEach((match) => {
                        jadwalHTML += jadwal(match);
                    })

                    document.querySelector('.match-data').innerHTML = jadwalHTML;    

                    for(let i = 0; i < data.matches.length; i++) {
                        const btnSavedJadwal = document.querySelectorAll('.btn-saved-jadwal')[i];
                        btnSavedJadwal.addEventListener('click', () => {
                            const data = JSON.parse(decodeURIComponent(btnSavedJadwal.getAttribute('data-match')));
                            saveMatchForLater(data);
                        })
                    }
                })
            }
        })
    }

    fetch(`${base_url}competitions/2021/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`, {
        headers: {
            'X-Auth-Token': token
        }
    })
    .then(status)
    .then(json)
    .then((data) => {
        let jadwalHTML = '';

        data.matches.forEach((match) => {
            jadwalHTML += jadwal(match);
        })

        document.querySelector('.match-data').innerHTML = jadwalHTML;  

        for(let i = 0; i < data.matches.length; i++) {
            const btnSavedJadwal = document.querySelectorAll('.btn-saved-jadwal')[i];
            btnSavedJadwal.addEventListener('click', () => {
                const data = JSON.parse(decodeURIComponent(btnSavedJadwal.getAttribute('data-match')));
                saveMatchForLater(data);
            })
        }
    })
    .catch(error);
}

export default getJadwal;