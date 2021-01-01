const createMatchInfo = (state) => {
    const weather = [
        "Weather: Sunny",
        "Weather: Rain",
        "Weather: Overcast",
        "Weather: Thunderstorms",
        "Weather: Cloudy",
        "Weather: Heavy Rain",
    ];

    const stadium = [
        "Stadium: Wembly",
        "Stadium: Old Trafford",
        "Stadium: St James' Park",
        "Stadium: Stamford Bridge",
        "Stadium: Ashton Gate",
        "Stadium: White Hart Lane",
    ];

    const referee = [
        "Referee: Howard Webb",
        "Referee: Graham Poll",
        "Referee: Mark Clattenburg",
        "Referee: Mike Dean",
        "Referee: Andre Marriner",
        "Referee: Pierluigi Collina",
    ];

    const weatherInfo = weather[Math.floor(Math.random() * weather.length)];
    const stadiumInfo = stadium[Math.floor(Math.random() * stadium.length)];
    const refereeInfo = referee[Math.floor(Math.random() * referee.length)];

    // betting favs

    let team1 = state.team1;
    let team2 = state.team2;
    let teamName1 = state.teamName1;
    let teamName2 = state.teamName2;

    let attack1 = team1.reduce((total, player) => total + +player.attack, 0);
    let attack2 = team2.reduce((total, player) => total + +player.attack, 0);

    let fav = () => {
        if (attack1 > attack2) {
            return `SkyBet: ${teamName1} are the favourites coming in the matchup`;
        } else if (attack2 > attack1) {
            return `SkyBet: ${teamName2} are the favourites coming in the matchup`;
        } else return "SkyBet: The game is too close to call opt for a draw";
    };

    const matchInfo = [weatherInfo, stadiumInfo, refereeInfo, fav()];

    return {
        ...state,
        matchInfo: matchInfo,
    };
};

export default createMatchInfo;
