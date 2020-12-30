const createMatchInfo = (state) => {
    const weather = [
        "Sunny",
        "Rain",
        "Overcast",
        "Thunderstorms",
        "Cloudy",
        "Heavy Rain",
    ];

    const stadium = [
        "Wembly",
        "Old Trafford",
        "St James' Park",
        "Stamford Bridge",
        "Ashton Gate",
        "White Hart Lane",
    ];

    const referee = [
        "Howard Webb",
        "Graham Poll",
        "Mark Clattenburg",
        "Mike Dean",
        "Andre Marriner",
        "Pierluigi Collina",
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
