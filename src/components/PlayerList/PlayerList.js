const PlayerList = ({ players }) => {
    return (
        <section>
            <h2>Available Squad</h2>
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
