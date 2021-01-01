const FinalScore = ({ teamName1, teamName2, team1Goals, team2Goals }) => {
    return (
        <section className="small-card">
            <h2 className="heading-bravo">Final Score</h2>
            <div className="content">
                <h1 className="heading-echo">
                    {teamName1}
                    <span className="goals">{team1Goals}</span>
                </h1>
                <h1 className="heading-echo">
                    {teamName2}
                    <span className="goals">{team2Goals}</span>
                </h1>
            </div>
        </section>
    );
};

export default FinalScore;
