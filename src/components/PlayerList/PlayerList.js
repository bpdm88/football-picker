const PlayerList = ({ playerName }) => {
    return (
        <ul>
            {playerName.map((player) => (
                <li key={player.id}>{player}</li>
            ))}
        </ul>
    );
};

export default PlayerList;
