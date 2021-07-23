const PLAYER = 'player';

export function getPlayer(){
    const playerString = localStorage.getItem(PLAYER);
    return JSON.parse(playerString);
}

export function setPlayer(playerObject){
    const playerString = JSON.stringify(playerObject);
    localStorage.setItem(PLAYER, playerString);
}

export function isDead(player) {
    return player.hp <= 0;
}

