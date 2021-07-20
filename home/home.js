import { setPlayer } from '../data/storage-utils.js';
import { makePlayer } from './make-player.js';

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', e => {
    e.preventDefault(); 
    const formData = new FormData(userForm); 
    const newPlayer = makePlayer(formData); 
   
    setPlayer(newPlayer);
    window.location.replace('./map');

});