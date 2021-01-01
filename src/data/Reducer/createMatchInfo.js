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
    let today = new Date().toLocaleDateString();

    const matchInfo = [today, weatherInfo, stadiumInfo, refereeInfo];

    return {
        ...state,
        matchInfo: matchInfo,
    };
};

export default createMatchInfo;
