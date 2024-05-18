import React, {useEffect, useState} from "react";
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
import {guestUserDataSelector, userDataSelector} from "./store/auth/selectors";
import ChooseAvatarAndNickname from "./components/pages/Profile/chooseAvatarAndNickname";
import {authUserAC} from "./store/auth/actions";

function App() {
    const dispatch = useDispatch();
    const userData = useSelector(userDataSelector);
    const guestUserData = useSelector(guestUserDataSelector);
    const [inviteUrl, setInviteURL] = useState('')

    if (window.location.pathname === '/playGame' && window.location.search && !inviteUrl) {
        setInviteURL(`${window.location.pathname}${window.location.search}`)
    }
    useEffect(() => {
        dispatch(authUserAC())
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<WelcomePage inviteUrl={inviteUrl}/>}/>
                <Route exact path="createGameSession"
                       element={
                           userData ?
                               <CreateGameSession/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="inviteFriends"
                       element={
                           // <InviteFriends/>
                           userData ?
                               <InviteFriends/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="playGame"
                       element={
                           // <GameStream userData={userData || guestUserData} isGuest={!!inviteUrl}/>
                           userData || guestUserData ?
                               <GameStream userData={userData || guestUserData} isGuest={!!inviteUrl}/> :
                               <Navigate to='/'/>
                       }
                />
                <Route exact path="gameList"
                       element={
                               // <GameList/>
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
                <Route exact path="settings/chooseAvatarAndNickname"
                       element={
                           inviteUrl ?
                               <ChooseAvatarAndNickname inviteUrl={inviteUrl}/> :
                               <Navigate to='/'/>
                       }
                />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
