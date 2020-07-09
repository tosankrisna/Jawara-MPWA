const base_url = 'https://api.football-data.org/v2/';
const token = '235eee4142ad4e849feb064922cf4728';

const status = response => {
    if (response.status !== 200) {
        console.log(`Error : ${response.status}`);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

const json = response => {
    return response.json();
}

const error = error => {
    console.log(`Error : ${error}`)
}

function getLatestKlasemen() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/standings`).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    let klasemenHTML = '';
                    data.standings.forEach(function(clubs) {
                        clubs.table.slice(0, 4).forEach(function(club) {
                            klasemenHTML += klasemen(club);
                        })
                    });

                    document.querySelector('.body-latest-klasemen').innerHTML = klasemenHTML;
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
    .then(function(data) {
        let klasemenHTML = '';
        data.standings.forEach(function(clubs) {
            clubs.table.slice(0, 4).forEach(function(club) {
                klasemenHTML += klasemen(club);
            })
        });

        document.querySelector('.body-latest-klasemen').innerHTML = klasemenHTML;
    })
    .catch(error);
}

function getLatestJadwal() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/matches?status=FINISHED`).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    let jadwalHTML = '';
                    data.matches.reverse().slice(0, 2).forEach(function(match) {
                        jadwalHTML += latestJadwal(match);
                    })

                    document.querySelector('.list-match').innerHTML = jadwalHTML;    
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
    .then(function(data) {
        let jadwalHTML = '';
        data.matches.reverse().slice(0, 2).forEach(function(match) {
            jadwalHTML += latestJadwal(match);
        });

        document.querySelector('.list-match').innerHTML = jadwalHTML;
    })
    .catch(error);
}

function getKlasemen() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/standings`).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    let klasemenHTML = '';
                    data.standings.forEach(function(clubs) {
                        clubs.table.forEach(function(club) {
                            klasemenHTML += klasemen(club);
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
    .then(function(data) {
        let klasemenHTML = '';
        data.standings.forEach(function(clubs) {
            clubs.table.forEach(function(club) {
                klasemenHTML += klasemen(club);
            })
        });

        document.querySelector('.body-klasemen').innerHTML = klasemenHTML;
    })
    .catch(error);
}

function getTopScorer() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/PL/scorers`).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    let topscoreHTML = '';
                    data.scorers.forEach(function(dataPlayer, i) {
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
    .then(function(data) {
        let topscoreHTML = '';
        data.scorers.forEach(function(dataPlayer, i) {
            topscoreHTML += topScorer(dataPlayer, i);
        });

        document.querySelector('.body-topscorer').innerHTML = topscoreHTML;
    })
    .catch(error);
}

function getJadwal() {
    const dateFrom = new Date(Date.now()).toISOString().slice(0, 10);
    const dateTo = new Date(Date.now() + 6.048e+8).toISOString().slice(0, 10);
    
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    let jadwalHTML = '';
                    data.matches.forEach(function(match) {
                        jadwalHTML += jadwal(match);
                    })

                    document.querySelector('.match-data').innerHTML = jadwalHTML;    
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
    .then(function(data) {
        let jadwalHTML = '';
        data.matches.forEach(function(match) {
            jadwalHTML += jadwal(match);
        })

        document.querySelector('.match-data').innerHTML = jadwalHTML;    
    })
    .catch(error);
}

function getClubById() {
    return new Promise((resolve, reject) => {
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get('id');
    
        if ('caches' in window) {
            caches.match(`${base_url}teams/${idParam}`).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        let clubDesc = detailClub(data);
    
                        document.querySelector('.detail-content').innerHTML = clubDesc;
                        resolve(data);
                    })
                }
            })
        }
    
        fetch(`${base_url}teams/${idParam}`, {
            headers: {
                'X-Auth-Token': token
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            let clubDesc = detailClub(data);

            document.querySelector('.detail-content').innerHTML = clubDesc;
            resolve(data);
        })
        .catch(error);
    })

}

function getSavedClubs() {
    getAll().then(function(clubs) {

        let clubsHTML = '';
        clubs.forEach(function(club) {
            clubsHTML += savedClub(club);
        })

        document.querySelector('.club-fav').innerHTML = clubsHTML;
    })
}

function getSavedClubById() {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get('id');

    getById(idParam).then(function(data) {
        let clubDesc = detailClub(data);

        document.querySelector('.detail-content').innerHTML = clubDesc;
    })
}

function getMatchById() {
    return new Promise((resolve, reject) => {
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get('id');

        if ('caches' in window) {
            caches.match(`${base_url}matches/${idParam}`).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        let matchData = detailMatch(data);
    
                        document.querySelector('.detail-content1').innerHTML = matchData;
                        resolve(data);
                    })
                }
            })
        }
    
        fetch(`${base_url}matches/${idParam}`, {
            headers: {
                'X-Auth-Token': token
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            let matchData = detailMatch(data);
    
            document.querySelector('.detail-content1').innerHTML = matchData;
            resolve(data);
        })
        .catch(error);
    })

}

function getSavedMatch() {
    getAllMatch().then(function(matches) {

        let matchHTML = '';
        matches.forEach(function(match) {
            matchHTML += savedMatch(match);
        })

        document.querySelector('.match-fav').innerHTML = matchHTML;
    })
}

function getSavedMatchById() {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get('id');

    getMatchId(idParam).then(function(data) {
        let matchData = detailMatch(data);

        document.querySelector('.detail-content').innerHTML = matchData;
    })
}