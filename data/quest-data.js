const filthPit = {
    id: 'filth-pit',
    title: 'Imps in a Filth Pit',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'imp-in-filthpit.jpg',
    description: `
        
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
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
    map: {
        top: '17%',
        left: '37%'
    },
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
    map: {
        top: '31%',
        left: '5%'
    },
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