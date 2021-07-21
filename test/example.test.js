
const test = QUnit.test;

import { makePlayer } from '../home/make-player.js';
import { getPlayer, setPlayer } from '../data/storage-utils.js';

test('should create new player', (expect) => {
    const expected = {
        name: 'john',
        race: 'Elf',
        hp: 50,
        gold: 0,
        completed: {}  
    };

    const playerInfo = new FormData();
    playerInfo.set('name', 'john');
    playerInfo.set('race', 'Elf');

    const actual = makePlayer(playerInfo);
    expect.deepEqual(actual, expected);
});



test('saveUser should update localStorage with user info', (expect) => {
    const expected = {
        name: 'Cabbage',
        race: 'Witch',
        hp: 35,
        gold: 0,
        completed: {}
    };
    setPlayer(expected);
    const actual = getPlayer();
    expect.deepEqual(actual, expected);
});