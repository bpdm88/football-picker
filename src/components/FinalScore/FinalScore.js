const FinalScore = ({ teamName1, teamName2, team1Goals, team2Goals }) => {
    return (
        <section>
            <h1>{teamName1}</h1>
            <h2>{team1Goals}</h2>
            <h1>{teamName2}</h1>
            <h2>{team2Goals}</h2>
        </section>
    );
};

export default FinalScore;
