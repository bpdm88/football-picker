import "./styles/index.css";
import Header from "./components/Header/Header";
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
            <Header />
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
