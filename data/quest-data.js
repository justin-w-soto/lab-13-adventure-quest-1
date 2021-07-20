const filthPit = {
    id: 'filth-pit',
    title: 'Imps in a Filth Pit',
    image: 'imp-in-filthpit.jpg',
    description: `
        
    `,
    choices: [{
        id: 'trick',
        description: 'Try to con them',
        result: `
            
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Attack!',
        result: `
     
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Retreat!!',
        result: `
            
        `,
        hp: -50,
        gold: 0
    }]
};

const mermaid = {
    id: 'mermaid',
    title: 'An evil mermaid zombie!!',
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
    prerequisites: ['filth-pit', 'moermaid'],
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