import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GameList from "./components/pages/Games";
import CreateGameSession from "./components/pages/Games/createGameSession";
import AddPlayerToGame from "./components/pages/addPlayersToGame";
import WelcomePage from "./components/pages/SignIn/welcomePage";
import Settings from "./components/pages/Profile/settings";
import NotFound from "./components/notFound";
import EditUserInfo from "./components/pages/Profile/settings/editUserInfo";
import './App.css';
import {authUserSuccessAC} from "./store/auth/actions";
import InviteFriends from "./components/pages/Games/inviteFriends";
import GameStream from "./components/pages/Games/stream";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('auth_user_data'))
        if (user) {
            dispatch(authUserSuccessAC(user))
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Layout />}>*/}
                <Route index element={<WelcomePage/>}/>
                <Route path="addPlayers" element={<AddPlayerToGame/>}/>
                <Route path="createGameSession" element={<CreateGameSession/>}/>
                <Route path="inviteFriends" element={<InviteFriends/>}/>
                <Route path="playGame" element={<GameStream/>}/>
                <Route path="gameList" element={<GameList/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="settings/editUserInfo" element={<EditUserInfo/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
