function topScorer(dataPlayer, i) {

    const preloader = document.querySelector('.loader-top-scorer');
    preloader.style.display = 'none';

    return `
        <tr class="topscorer-content">
            <td class="center hide-on-med-and-down">${i + 1}</td>
            <td class="center">${dataPlayer.player.name}</td>
            <td class="center">${dataPlayer.team.name.replace('FC', '')}</td>
            <td class="center hide-on-med-and-down">${dataPlayer.player.nationality}</td>
            <td class="center">${dataPlayer.numberOfGoals}</td>
        </tr>
    `;
}

export default topScorer;