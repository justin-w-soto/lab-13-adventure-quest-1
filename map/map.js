import quests from '../data/quest-data.js';
import { getPlayer } from '../data/storage-utils.js';
import { questsComplete } from './quests-complete.js';
//console.log(quests);

const player = getPlayer();
if (player.hp <= 0 || questsComplete(player)) {
    window.location.replace('../results');
} 

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    if (player.completed[quest.id]) {
        createQuestSpan(quest);
    } else {
        createQuestLink(quest);
    }
}
function createQuestSpan(quest){
    const span = document.createElement('span');
    span.innerText = `${quest.title} VICTORY`;
    questList.appendChild(span);
}
     
function createQuestLink(quest) {
    const questHref = `../quest/?questId=${quest.id}`;
    //console.log(questHref);
    const questLink = document.createElement('a');
    questLink.href = questHref;
    questLink.textContent = quest.title;
    questList.appendChild(questLink);
}

