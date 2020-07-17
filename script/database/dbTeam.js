import dbPromised from './db.js';

export function saveTeamForLater(data) {
    dbPromised
        .then(db => {         
            const dataToStore = {
                id: data.id,
                crestUrl: data.crestUrl,
                teamName: data.name,
                tla: data.tla,
                venue: data.venue,
                phone: data.phone,
                address: data.address,
                founded: data.founded,
                website: data.website
            };
            
            const tx = db.transaction('teams', 'readwrite');
            const store = tx.objectStore('teams');

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

export function getAllTeam() {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                const tx = db.transaction('teams', 'readonly');
                const store = tx.objectStore('teams');

                return store.getAll();
            })
            .then(teams => {
                resolve(teams);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

export function deleteTeam(id) {
    dbPromised
        .then(db => {
            const tx = db.transaction('teams', 'readwrite');
            const store = tx.objectStore('teams');

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