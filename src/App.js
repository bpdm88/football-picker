import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import Team from "./components/Team";
import TeamNews from "./components/TeamNews";
import MatchDay from "./components/MatchDay";
import FinalScore from "./components/FinalScore";
import PostMatch from "./components/PostMatch";

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
            <PostMatch />
        </>
    );
};

export default App;
