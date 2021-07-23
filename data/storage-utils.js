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

// Other stuff that might help


function loadProfile() {

    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');
    const user = getPlayer();

    if (!user) {
        
        window.location = './';
    }

//     name.textContent = PLAYER.name;
//     avatar.src = '../assets/avatars/' + player.race + '.png';
//     gold.textContent = player.gold;

//     if (isDead(PLAYER)) {
//         hp.textContent = 'YOU DIED!!!';
//     }
//     else {
//         hp.textContent = PLAYER.hp;
//     }

// }

// export default loadProfile;