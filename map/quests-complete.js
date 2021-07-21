import quests from '../data/quest-data.js';

export function questsComplete(player){
    for (let quest of quests){
        if (!player.completed[quest.id]) {
            return false;
        }
    }
    return true;
}