const PlayerList = ({ players }) => {
    return (
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
    );
};

export default PlayerList;
