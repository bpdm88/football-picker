const PlayerList = ({ players }) => {
    return (
        <section className="large-card">
            <h2 className="heading-bravo">Available Squad</h2>
            <div class="abilities">
                <h4 className="heading-charlie">Player</h4>
                <div className="scores">
                    <h4 className="heading-charlie">Attack</h4>
                    <h4 className="heading-charlie">Defend</h4>
                    <h4 className="heading-charlie">Creativity</h4>
                </div>
            </div>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <div class="abilities">
                            <span className="heading-charlie">
                                {player.name}
                            </span>
                            <div className="scores">
                                <span className="heading-charlie">
                                    {player.attack}
                                </span>
                                <span className="heading-charlie">
                                    {player.defence}
                                </span>
                                <span className="heading-charlie">
                                    {player.creativity}
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PlayerList;
