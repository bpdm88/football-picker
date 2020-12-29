import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import Team from "./components/Team";
import TeamNews from "./components/TeamNews";
import MatchDay from "./components/MatchDay";
import FinalScore from "./components/FinalScore";

const App = () => {
    return (
        <>
            <h1>Title</h1>
            <PlayerForm />
            <PlayerList />
            <Team />
            <TeamNews />
            <MatchDay />
            <FinalScore />
        </>
    );
};

export default App;
