import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import GameList from "./components/pages/Games";
import CreateGameSession from "./components/pages/Games/createGameSession";
import WelcomePage from "./components/pages/SignIn/welcomePage";
import Settings from "./components/pages/Profile/settings";
import NotFound from "./components/notFound";
import EditUserInfo from "./components/pages/Profile/settings/editUserInfo";
import './App.css';
import InviteFriends from "./components/pages/Games/inviteFriends";
import GameStream from "./components/pages/Games/stream";
import {userDataSelector} from "./store/auth/selectors";
import {authUserAC} from "./store/auth/actions";

function App() {
    const dispatch = useDispatch();
    const userData = useSelector(userDataSelector);

    useEffect(() => {
        dispatch(authUserAC())
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<WelcomePage/>}/>
                <Route exact path="createGameSession"
                       element={
                           userData ?
                               <CreateGameSession/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="inviteFriends"
                       element={
                           userData ?
                               <InviteFriends/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="playGame"
                       element={
                           userData ?
                               <GameStream/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="gameList"
                       element={
                           userData ?
                               <GameList/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="settings"
                       element={
                           userData ?
                               <Settings/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="settings/editUserInfo"
                       element={
                           userData ?
                               <EditUserInfo/> :
                               <Navigate to='/'/>
                       }
                />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
