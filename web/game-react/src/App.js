import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {GameList} from "./components/Game/gameList";
import React from "react";
import {CreateGameSession} from "./components/Game/createGameSession";
import {AddPlayerToGame} from "./components/Stream/addPlayerToGame";

function App() {



    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Layout />}>*/}
                <Route index element={<GameList/>}/>
                <Route path="addPlayers" element={<AddPlayerToGame/>}/>
                <Route path="createGameSession" element={<CreateGameSession/>}/>
                {/*<Route path="*" element={<NoPage />} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
