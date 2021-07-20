const filthPit = {
    id: 'filth-pit',
    title: 'Imps in a Filth Pit',
    image: 'imp-in-filthpit.jpg',
    description: `You have entered the lair of the Imps. A large pit filled with 
    the refuse of a thousand kingdoms. It is disgusting, the air smells of fish and cheese. 
    The Imps are sweaty and mean. They look like they work-out and they definitely
    want to kick your ass. What are you going to do?`,

    choices: [{
        id: 'trick',
        description: 'Try to con them',
        result: `Imps cannot be conned by a simpleton such as yourself. 
        The imps take a finger from your right hand as a reminder of your foolishness.
        You find a bag of gold on your way out of the filth pit so it's not all bad, right?`,

        hp: -10,
        gold: 35
    }, {
        id: 'fight',
        description: 'Attack!',
        result: `You draw your weapon, but the imps strike first. 
        They cut off both of your arms in the battle, but you use 
        some magic beans you found to poison them all. You run out of the filth pit 
        without arms but you have stolen all of the impish gold from the pit.`,

        hp: -30,
        gold: 150
    }, {
        id: 'run',
        description: 'Retreat!!',
        result: `You turn to run, but slip on a discarded human face that the imps 
        have left behind from their last feast. In a rare moment of genius, 
        you use the face to disguise yourself and leave the filth pit unnoticed.`,

        hp: 35,
        gold: 0
    }]
};

const mermaid = {
    id: 'mermaid',
    title: 'An evil Fish lady!!',
    image: 'mermaid.jpg',
    
    description: `
    
    `,
    choices: [{
        id: 'run',
        description: 'Run',
        result: `
           
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'fight!',
        result: `
           
        `,
        hp: -45,
        gold: 0
    }, {
        id: '',
        description: '',
        result: `
            
        `,
        hp: 0,
        gold: 90
    }]
};

const unknown = {
    id: 'unknown',
    title: 'unknown',
    prerequisites: ['filth-pit', 'mermaid'],
    image: '',
   
    description: `
        
    `,
    choices: [{
        id: '1',
        description: 'choice 1',
        result: '',
        hp: -10,
        gold: 40
    }, {
        id: '2',
        description: 'choice 2',
        result: '',
        hp: -50,
        gold: 0
    }, {
        id: '3',
        description: 'choice 3',
        result: '',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    filthPit, 
    mermaid,
    unknown,
];

export default quests;