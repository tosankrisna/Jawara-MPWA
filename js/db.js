const dbPromised = idb.open('Jawara', 1, (upgradeDb) => {
    if (!upgradeDb.objectStoreNames.contains('clubs')) {
        const clubFavorit = upgradeDb.createObjectStore('clubs', {
            keyPath: 'id'
        });
    
        clubFavorit.createIndex('clubName', 'name', { unique: false });
    } 
    if (!upgradeDb.objectStoreNames.contains('matches')) {
        const matchFavorit = upgradeDb.createObjectStore('matches', {
            keyPath: 'id'
        })

        matchFavorit.createIndex('homeTeamName', 'homeTeamName', { unique: false });
        matchFavorit.createIndex('awayTeamName', 'awayTeamName', { unique: false });
    }
})

const saveForLater = club => {
    console.log(club)
    dbPromised
        .then(db => {
            const dataToStore = {
                id: club.id,
                crestUrl: club.crestUrl,
                name: club.name,
                tla: club.tla,
                venue: club.venue,
                phone: club.phone,
                address: club.address,
                founded: club.founded,
                website: club.website
            }
            
            const tx = db.transaction('clubs', 'readwrite');
            const store = tx.objectStore('clubs');
            store.add(dataToStore);
            return tx.complete;
        })
        .then(() => {
            M.toast({html: 'Data berhasil ditambahkan ke favorit'})
        })
        .catch(() => {
            M.toast({html: 'Data sudah ditambahkan sebelumnya'})
        })
}

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                const tx = db.transaction('clubs', 'readonly');
                const store = tx.objectStore('clubs');

                return store.getAll();
            })
            .then(clubs => {
                resolve(clubs);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

const getById = id => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                const tx = db.transaction('clubs', 'readonly');
                const store = tx.objectStore('clubs');

                return store.get(id);
            })
            .then(club => {
                resolve(club);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

const deleteData = id => {
    dbPromised
        .then(db => {
            const tx = db.transaction('clubs', 'readwrite');
            const store = tx.objectStore('clubs');

            store.delete(id);
            return tx.complete;
        })
        .then(() => {
            M.toast({html: 'Data berhasil dihapus'})
        })
        .catch(() => {
            M.toast({html: 'Terjadi kesalahan dalam menghapus data'})
        })
}


const saveMatchForLater = match => {
    dbPromised
        .then(db => {
            const dataToStore = {
                id: match.match.id,
                homeTeamName: match.head2head.homeTeam.name,
                homeTeamId: match.head2head.homeTeam.id,
                homeTeamWins: match.head2head.homeTeam.wins,
                homeTeamDraws: match.head2head.homeTeam.draws,
                homeTeamLosses: match.head2head.homeTeam.losses,
                awayTeamName: match.head2head.awayTeam.name,
                awayTeamId: match.head2head.awayTeam.id,
                awayTeamWins: match.head2head.awayTeam.wins,
                awayTeamDraws: match.head2head.awayTeam.draws,
                awayTeamLosses: match.head2head.awayTeam.losses,
                matchDay: match.match.matchday,
                utcDate: match.match.utcDate,
                venue: match.match.venue
            };

            const tx = db.transaction('matches', 'readwrite');
            const store = tx.objectStore('matches');
            store.add(dataToStore);

            return tx.complete;
        })
        .then(() => {
            M.toast({html: 'Data berhasil ditambahkan ke favorit'})
        })
        .catch(() => {
            M.toast({html: 'Data sudah ditambahkan sebelumnya'})
        })
}

const getAllMatch = () => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                const tx = db.transaction('matches', 'readonly');
                const store = tx.objectStore('matches');

                return store.getAll();
            })
            .then(matches => {
                resolve(matches);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

const getMatchId = id => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                const tx = db.transaction('matches', 'readonly');
                const store = tx.objectStore('matches');

                return store.get(id);
            })
            .then(match => {
                resolve(match);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

const deleteMatch = id => {
    dbPromised
        .then(db => {
            const tx = db.transaction('matches', 'readwrite');
            const store = tx.objectStore('matches');

            store.delete(id);
            return tx.complete;
        })
        .then(() => {
            M.toast({html: 'Data berhasil dihapus'})
        })
        .catch(() => {
            M.toast({html: 'Terjadi kesalahan dalam menghapus data'})
        })
}