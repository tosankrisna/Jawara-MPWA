function klasemen(club) {

    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';

    return `
        <tr class="klasemen-content">
            <td class="center">${club.position}</td>
            <td>
                <img src="${club.team.crestUrl}" class="hide-on-small-only team-logo" alt="Logo Tim">
            </td> 
            <td>
                <a href="../detail-club.html?id=${club.team.id}" class="club-name">
                    ${club.team.name.replace('FC', '')}
                </a>
            </td>
            <td class="center hide-on-med-and-down">${club.playedGames}</td>
            <td class="center hide-on-small-only">${club.won}</td>
            <td class="center hide-on-small-only">${club.draw}</td>
            <td class="center hide-on-small-only">${club.lost}</td>
            <td class="center hide-on-med-and-down">${club.goalsFor}</td>
            <td class="center hide-on-med-and-down">${club.goalsAgainst}</td>
            <td class="center hide-on-med-and-down">${club.goalDifference}</td>
            <td class="center">${club.points}</td>
        </tr>
    `;
}