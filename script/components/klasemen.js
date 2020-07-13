import { urlConvert } from '../helper/convertData.js';

function klasemen(team) {

    const preloader = document.querySelector('.loader-last-klasemen');
    preloader.style.display = 'none';

    return `
        <tr class="klasemen-content">
            <td class="center">${team.position}</td>
            <td>
                <img src="${urlConvert(team.team.crestUrl)}" class="hide-on-small-only team-logo" alt="${team.team.name}">
            </td> 
            <td class="club-name">${team.team.name.replace('FC', '')}</td>
            <td class="center hide-on-med-and-down">${team.playedGames}</td>
            <td class="center hide-on-small-only">${team.won}</td>
            <td class="center hide-on-small-only">${team.draw}</td>
            <td class="center hide-on-small-only">${team.lost}</td>
            <td class="center hide-on-med-and-down">${team.goalsFor}</td>
            <td class="center hide-on-med-and-down">${team.goalsAgainst}</td>
            <td class="center hide-on-med-and-down">${team.goalDifference}</td>
            <td class="center">${team.points}</td>
        </tr>
    `;
}

export default klasemen;