import './App.css';
import {BrowserRouter, Route, Switch, Redirect, useLocation, useHistory, Routes} from 'react-router-dom';
import {Arrows} from "./components/OldView/arrows";
import {Screen} from "./components/screen";
import {GuideText} from "./components/OldView/guideText";
import {PlayersSlider} from "./components/OldView/playersSlider";
import {HolderButtons} from "./components/OldView/holderButtons";
import useScript from "./hooks/useScript";
import {GameList} from "./components/Game/gameList";
import styled from "styled-components";
import {Header} from "./components/Common/header";
import React from "react";
import {WelcomePage} from "./components/SignIn/welcomePage";
import {colors} from "./Helpers/UI/constants";
import {ConfirmAccount} from "./components/SignIn/confirmAccount";
import {PrivacyPolicy} from "./components/SignIn/privacyPolicy";
import {ReactComponent as ArrowLeft} from "./img/icons/arrow-left.svg";
import {CreateGameSession} from "./components/Game/createGameSession";
import {GameSessionCreated} from "./components/Game/gameSessionCreated";
import {PreviousGameSessions} from "./components/Game/previousGameSessions";
import {Lobby} from "./components/Game/lobby";
import {ChooseAvatarAndNickname} from "./components/Profile/chooseAvatarAndNickname";
import {useSelector} from "react-redux";
import {activeGameIndexSelector, gameIsStarted} from "./store/games/selectors";
import {Stream} from "./components/Stream/stream";
import {AddPlayerToGame} from "./components/Stream/addPlayerToGame";
import {DndProvider, DragPreviewImage} from "react-dnd";
import {DragPlayers} from "./components/Stream/dragPlayers";
import {HTML5Backend} from "react-dnd-html5-backend";
import Example from "./components/Stream/example";

function App() {


    const gameStarted = useSelector(gameIsStarted);

    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Layout />}>*/}
                <Route index element={<GameList/>}/>
                <Route path="addPlayers" element={<AddPlayerToGame/>}/>
                <Route path="createGameSession" element={<CreateGameSession/>}/>
                {/*<Route path="*" element={<NoPage />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    )
}
const MainContainer = styled.div`
  display: flex;
`
const GamesOldContainer = styled.div`
  display: none;
  position: relative;
  height: 100vh;
  width: 50vw;
`
const GamesNewContainer = styled.div`
  height: 100vh;
  width: 540px;
  @media (max-width: 570px) {
    width: 100vw;
  }
`
const PageWrapper = styled.div`
  margin: auto;
  padding: 46px 16px;
  height: calc(100% - 92px);
`
export default App;
