export function scoreQuest(choice, questId, player) {
    player.hp += choice.hp;
    player.gold += choice.gold;
    player.completed[questId] = true;
}
