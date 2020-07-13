import { getAllTeam, deleteTeam } from '../database/dbTeam.js';
import savedTeam from '../components/savedTeam.js';

function getSavedTeams() {
    getAllTeam().then((teams) => {

        if (teams.length === 0) {
            setTimeout(() => {
                const preloader = document.querySelector('.loader-team-fav');
                preloader.style.display = 'none';
                
                document.querySelector('.team-fav').innerHTML = `
                    <div class="message message-team amber lighten-2">
                        <p>Anda belum memilih team favorit</p>
                    </div>
                `;
            }, 500);
        }

        let teamsHTML = '';

        teams.forEach((team) => {
            teamsHTML += savedTeam(team);
        })

        document.querySelector('.team-fav').innerHTML = teamsHTML;

        for (let i = 0; i < teams.length; i++) {
            const btnDelete = document.querySelectorAll('.btn-team-delete')[i];
            btnDelete.addEventListener('click', () => {
                const teamId = btnDelete.getAttribute('data-id');
                const teamPopUp = confirm('Yakin ingin menghapus data?');

                if (teamPopUp === true) {
                    deleteTeam(parseInt(teamId));
                    getSavedTeams();
                } 
            })
        }
    })
}

export default getSavedTeams;