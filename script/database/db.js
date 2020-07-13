const dbPromised = idb.open('Jawara', 1, (upgradeDb) => {
    if (!upgradeDb.objectStoreNames.contains('teams')) {
        const TeamFavorit = upgradeDb.createObjectStore('teams', {
            keyPath: 'id'
        });
    
        TeamFavorit.createIndex('teamName', 'teamName', { unique: false });
    } 
    if (!upgradeDb.objectStoreNames.contains('matches')) {
        const matchFavorit = upgradeDb.createObjectStore('matches', {
            keyPath: 'id'
        })

        matchFavorit.createIndex('homeTeamName', 'homeTeamName', { unique: false });
        matchFavorit.createIndex('awayTeamName', 'awayTeamName', { unique: false });
    }
})

export default dbPromised;