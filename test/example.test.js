
const test = QUnit.test;

import { makePlayer } from '../home/make-player.js';
import { getPlayer, setPlayer } from '../data/storage-utils.js';

test('should create new player', (expect) => {
    const expected = {
        name: 'john',
        race: 'Elf',
        completed: {},  
        gold: 0,
        hp: 50
    };

    const playerInfo = new FormData();
    playerInfo.set('name', 'john');
    playerInfo.set('race', 'Elf');

    const actual = makePlayer(playerInfo);
    expect.deepEqual(actual, expected);
});



test('should send players info to localStorage', (expect) => {
    const expected = {
        name: 'Cabbage',
        race: 'Witch',
        completed: {},
        gold: 0,
        hp: 35
    };
    setPlayer(expected);
    const actual = getPlayer();
    expect.deepEqual(actual, expected);
});