const PlayerList = ({ players }) => {
    return (
        <section className="large-card">
            <h2 className="heading-bravo">Available Squad</h2>
            <div class="abilities">
                <h3 className="heading-charlie">Player</h3>
                <div className="scores">
                    <h3 className="heading-charlie">Attack</h3>
                    <h3 className="heading-charlie">Defend</h3>
                    <h3 className="heading-charlie">Creativity</h3>
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
