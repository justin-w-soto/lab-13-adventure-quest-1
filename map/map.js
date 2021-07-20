import quests from '../data/quest-data.js';
//console.log(quests);
const questList = document.getElementById('quest-list');

for (let quest of quests) {
    const questHref = `../quest/?questId=${quest.id}`;
    //console.log(questHref);

    const questLink = document.createElement('a');

    questLink.href = questHref;
    questLink.textContent = quest.title;
    questList.appendChild(questLink);

}
