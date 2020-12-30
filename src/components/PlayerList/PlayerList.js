const PlayerList = ({ players }) => {
    return (
        <section className="large-card">
            <h2 className="heading-bravo">Available Squad</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <span>{player.name}</span>
                        <span>{player.attack}</span>
                        <span>{player.defence}</span>
                        <span>{player.creativity}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PlayerList;
