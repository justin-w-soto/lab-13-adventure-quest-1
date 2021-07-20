const PLAYER = 'player';

export function getPlayer(){
    // return player from localStorage
    const playerString = localStorage.getItem(PLAYER);
    return JSON.parse(playerString);
}

export function setPlayer(playerObject){
    // stringify the playerObject
    const playerString = JSON.stringify(playerObject);
    // set in local storage
    localStorage.setItem(PLAYER, playerString);
}