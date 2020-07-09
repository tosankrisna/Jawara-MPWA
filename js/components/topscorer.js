function topScorer(dataPlayer, i) {

    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';

    return `
        <tr class="topscorer-content">
            <td class="center hide-on-med-and-down">${i + 1}</td>
            <td class="center">${dataPlayer.player.name}</td>
            <td class="center">
                <a href="../detail-club.html?id=${dataPlayer.team.id}" class="club-name">
                    ${dataPlayer.team.name.replace('FC', '')}
                </a>
            </td>
            <td class="center hide-on-med-and-down">${dataPlayer.player.nationality}</td>
            <td class="center">${dataPlayer.numberOfGoals}</td>
        </tr>
    `;
}