import { getAllMatch, deleteMatch } from '../database/dbMatch.js';
import savedMatch from '../components/savedMatch.js';

function getSavedMatch() {
    getAllMatch().then((matches) => {

        if (matches.length === 0) {
            setTimeout(() => {
                const preloader = document.querySelector('.loader-match-fav');
                preloader.style.display = 'none';
                
                document.querySelector('.match-fav').innerHTML = `
                    <div class="message message-match amber lighten-2">
                        <p>Anda belum memilih laga favorit</p>
                    </div>
                `;
            }, 500);
        }

        let matchHTML = '';
        matches.forEach((match) => {
            matchHTML += savedMatch(match);
        })

        document.querySelector('.match-fav').innerHTML = matchHTML;

        for (let i = 0; i < matches.length; i++) {
            const btnDelete = document.querySelectorAll('.btn-match-delete')[i];

            btnDelete.addEventListener('click', () => {
                const matchId = btnDelete.getAttribute('data-id');
                const matchPopUp = confirm('Yakin ingin menghapus data?');

                if (matchPopUp === true) {
                    deleteMatch(parseInt(matchId));
                    getSavedMatch();
                } 
            })
        }
    })
}

export default getSavedMatch;