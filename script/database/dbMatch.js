import dbPromised from './db.js';

export function saveMatchForLater(match) {
    dbPromised
        .then(db => {
            const dataToStore = {
                id: match.id,
                homeTeamName: match.homeTeam.name,
                homeTeamId: match.homeTeam.id,
                awayTeamName: match.awayTeam.name,
                awayTeamId: match.awayTeam.id,
                matchDay: match.matchday,
                utcDate: match.utcDate,
            };

            const tx = db.transaction('matches', 'readwrite');
            const store = tx.objectStore('matches');

            store.put(dataToStore);
            return tx.complete;
        })
        .then(() => {
            M.toast({html: 'Data berhasil ditambahkan ke favorit'})
        })
        .catch(() => {
            M.toast({html: 'Data sudah ditambahkan sebelumnya'})
        })
}

export function getAllMatch() {
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

export function deleteMatch(id) {
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