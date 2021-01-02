const createSquad = (state) => {
    const players = [
        { name: "Alan Shearer", attack: 5, defence: 2, creativity: 3 },
        { name: "Wayne Rooney", attack: 4, defence: 2, creativity: 4 },
        { name: "Roberto Carlos", attack: 3, defence: 4, creativity: 3 },
        { name: "Luis Figo", attack: 4, defence: 2, creativity: 4 },
        { name: "Paul Gascoigne", attack: 3, defence: 2, creativity: 5 },
        { name: "Rivaldo", attack: 4, defence: 1, creativity: 5 },
        { name: "Thierry Henry", attack: 5, defence: 2, creativity: 3 },
        { name: "Gianluca Vialli", attack: 4, defence: 0, creativity: 2 },
        { name: "Marcel Desailly", attack: 2, defence: 5, creativity: 0 },
        { name: "Zinedine Zidane", attack: 3, defence: 3, creativity: 5 },
        { name: "David Ginola", attack: 3, defence: 3, creativity: 3 },
        { name: "Frank Lampard", attack: 3, defence: 3, creativity: 3 },
        { name: "Sergio Ramos", attack: 1, defence: 5, creativity: 2 },
        { name: "John Terry", attack: 2, defence: 4, creativity: 0 },
        { name: "Paolo Maldini", attack: 2, defence: 5, creativity: 2 },
        { name: "Gary Neville", attack: 1, defence: 5, creativity: 1 },
        { name: "Roy Keane", attack: 2, defence: 3, creativity: 3 },
        { name: "Andrea Pirlo", attack: 2, defence: 2, creativity: 5 },
        { name: "Peter Crouch", attack: 3, defence: 1, creativity: 0 },
        { name: "Paul Pogba", attack: 2, defence: 2, creativity: 2 },
        { name: "Mo Salah", attack: 4, defence: 1, creativity: 2 },
        { name: "Patrick kluivert", attack: 4, defence: 0, creativity: 2 },
        { name: "Rio Ferdinand", attack: 0, defence: 5, creativity: 1 },
        { name: "Thomas Muller", attack: 5, defence: 2, creativity: 2 },
        { name: "Freddy Adu", attack: 1, defence: 0, creativity: 2 },
        { name: "Mario Balotelli", attack: 2, defence: 0, creativity: 2 },
        { name: "Gareth Bale", attack: 3, defence: 1, creativity: 3 },
        { name: "David Luiz", attack: 0, defence: 2, creativity: 0 },
        { name: "Nicolas Anelka", attack: 4, defence: 0, creativity: 0 },
        { name: "Lionel Messi", attack: 5, defence: 3, creativity: 5 },
    ];

    const shuffle = (array) => array.sort(() => 0.5 - Math.random());

    let newArr = shuffle(players);

    let autoSquad = newArr.slice(0, 10);

    return {
        ...state,
        players: autoSquad,
        listComplete: true,
    };
};

export default createSquad;
