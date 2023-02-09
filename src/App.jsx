import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

// import getPlaylist from './api';
import './App.css'

function App(){
    const {getPlaylist} = useStoreActions((action) => action.playlists)
    const playlists = useStoreState((state) => state.playlists.data)

    useEffect(() => {
        getPlaylist('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl')
    }, [])

    console.log(playlists);
    return (
      <h1>Clean Youtube</h1>
    )
}

export default App
