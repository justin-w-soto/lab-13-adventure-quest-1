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
    title: 'An Evil Fish lady!!',
    image: 'mermaid.jpg',
    
    description: `Welcome to the lake of Despair. An Evil Mermaid has been eating 
    children from a nearby village. She appears from the lake and confronts you.`,

    choices: [{
        id: 'run',
        description: 'Run',
        result: `You snatch a bag of gold from her neck and run. But it turns out that 
        running from an evil mermaid ghost lady is tough. She gnaws at your ankles as you make your escape.
        You lose one foot in the process.`,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fight!',
        result: `She kicks your butt and leaves you on the lakeshore.`,

        hp: -45,
        gold: 0
    }, {
        id: 'Take Her on a Date',
        description: 'go on a date',
        result: `The mermaid has been eating children out of boredom. She is lonely. 
        You offer to take her out on a date and she accepts. After a nice dinner at hotdog on a stick
        you realize that you two have a lot in common. She gives you a bag of gold becuase she thinks you're nice.`,

        hp: 0,
        gold: 90
    }]
};

const unknown = {
    id: 'unknown',
    title: 'unknown',
    prerequisites: ['filth-pit', 'mermaid'],
    image: 'skull.jpg',
   
    description: `In the far corner of the continent lies an ancient evil. It's source is
     unknown but all who encounter it are stripped of their skin. It's so evil it doesn't even have a name.
     It knows that you are here. What will you do?`,

    choices: [{
        id: 'eat-it',
        description: 'Eat it',
        result: `You have chosen to eat it. This actually works but you get indigestion so -10 hp for that. 
        You can use the 40 gold you got to buy some tums.`,

        hp: -10,
        gold: 40
    }, {
        id: 'Kill-it',
        description: 'Kill it!!',
        result: `You can't kill pure evil, dum-dum. You just lost your skin`,
        hp: -50,
        gold: 0
    }, {
        id: 'checkers',
        description: 'challenge the evil to checkers',
        result: `You are awesome at checkers, you win!`,
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