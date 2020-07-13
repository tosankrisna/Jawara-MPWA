import { base_url, token, status, json, error } from './api.js';
import topScorer from '../components/topScorer.js';

function getTopScorer() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/PL/scorers`).then((response) => {
            if (response) {
                response.json().then((data) => {
                    let topscoreHTML = '';

                    data.scorers.forEach((dataPlayer, i) => {
                        topscoreHTML += topScorer(dataPlayer, i);
                    });

                    document.querySelector('.body-topscorer').innerHTML = topscoreHTML;
                });
            }
        });
    }

    fetch(`${base_url}competitions/PL/scorers`, {
        headers: {
            'X-Auth-Token': token
        }
    })
    .then(status)
    .then(json)
    .then((data) => {
        let topscoreHTML = '';

        data.scorers.forEach((dataPlayer, i) => {
            topscoreHTML += topScorer(dataPlayer, i);
        });

        document.querySelector('.body-topscorer').innerHTML = topscoreHTML;
    })
    .catch(error);
}

export default getTopScorer;