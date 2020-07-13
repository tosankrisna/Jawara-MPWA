import getLatestKlasemen from '../data/dataLatestKlasemen.js';
import getLatestJadwal from '../data/dataLatestJadwal.js';
import getKlasemen from '../data/dataKlasemen.js';
import getTeam from '../data/dataTeam.js';
import getTopScorer from '../data/dataTopScorer.js';
import getJadwal from '../data/dataJadwal.js';
import getSavedTeams from '../data/dataSavedTeam.js';
import getSavedMatch from '../data/dataSavedMatch.js';

export function loadNav() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status !== 200) {
                return;
            }
            
            document.querySelectorAll('.topnav, .sidenav').forEach((elm) => {
                elm.innerHTML = xhttp.responseText;
            });

            document.querySelectorAll('.sidenav a, .topnav a').forEach((elm) => {
                elm.addEventListener('click', (event) => {
                    
                    const sidenav = document.querySelector('.sidenav');
                    M.Sidenav.getInstance(sidenav).close();

                    let page = event.target.getAttribute('href').substr(1);
                    loadPage(page);
                });
            });
        }
    };

    xhttp.open('GET', 'nav.html', true);
    xhttp.send();
}

export function loadPage(page) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            const content = document.querySelector('#body-content');

            if (page === 'beranda') {
                getLatestKlasemen();
                getLatestJadwal();
            } else if (page === 'klasemen') {
                getKlasemen();
            } else if (page === 'team') {
                getTeam();
            } else if (page === 'topScorer') {
                getTopScorer();
            } else if (page === 'jadwal') {
                getJadwal();
            } else if (page === 'favorit') {
                getSavedTeams();
                getSavedMatch();
            }

            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
            } else if (this.status === 404) {
                content.innerHTML = '<p>Halaman tidak ditemukan</p>';
            } else {
                content.innerHTML = '<p>Ups... halaman tidak dapat diakses</p>';
            }
        }
    };

    xhttp.open('GET', 'pages/' + page + '.html', true);
    xhttp.send();
}