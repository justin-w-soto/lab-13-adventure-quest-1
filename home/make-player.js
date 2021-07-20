export function makePlayer(formData){
    const newPlayer = {
        
        hp: 35,
        name: formData.get('name'),
        race: formData.get('race'),
        completed: {}
    };

    const key = 'gold';
    newPlayer[key] = 0;
  
    return newPlayer;
}