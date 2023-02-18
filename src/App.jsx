import { CssBaseline } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/global.css'
import Navbar from './components/navbar';
import Home from './components/home/Home';
import Favorite from './components/favorite';
import NotFound from './utils/NotFound';
import Recent from './components/recent';
import Playlists from './components/playlists/playlists';
import Videos from './components/videos';
import Player from './components/player';

function App(){
    const {favorites, playlists, recents} = useStoreState((state) => state)
    const plId = Object.keys(playlists.data)
    const playlistArray = plId.map((item) => playlists.data[item])
    const favArray = favorites.data.map((item) => (playlists.data[item]))
    const recentArray = recents.data.map((item) => (playlists.data[item]))

    return (
        <>  
            <BrowserRouter>
                <CssBaseline />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home favorites={favorites} playlistArray={playlistArray} favArray={favArray} recentArray={recentArray} />} />
                    <Route path='/playlists' element={<Playlists  playlistArray={playlistArray} favorites={favorites} />} />
                    <Route path='/favorites' element={<Favorite playlistArray={favArray} favorites={favorites} />} />
                    <Route path='/recent' element={<Recent playlistArray={recentArray} favorites={favorites}/>} />
                    <Route path='/playlists/:playlistId' element={<Videos />} />
                    <Route path='/playlists/:playlistId/:videoId' element={<Player />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
