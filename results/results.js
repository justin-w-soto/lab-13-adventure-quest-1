import { getPlayer, PLAYER } from '../data/storage-utils.js';

const player = getPlayer();
const results = document.getElementById('results');
const story = document.getElementById('story-display');
const golD = player.gold;
const hP = player.hp;


function leftOverGold(goldsupply) {
    if (goldsupply < 50) {
        return 'Try not to spend it all in one place, Slick.';
    } else if (goldsupply < 100){
        return 'You can buy a lot of burritos with that.';
    } else {
        return 'You can build a rocket to shoot your rich a$$ into space!';
    }
    
}

const goldMessage = document.getElementById('gold');
goldMessage.push(goldsupply);

