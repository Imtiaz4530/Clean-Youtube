import { Box, Button, Link, TextField } from "@mui/material"
import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import {Link as linkRoute, useNavigate} from 'react-router-dom';

import HomePage from "../../reusable/homePage";
import styles from './home.module.css'

const Home = ({favorites, favArray, recentArray, playlistArray}) => {
    const [value, setValue] = useState('')
    const {getPlaylist} = useStoreActions((action) => action.playlists)

    const navigate = useNavigate()

    const handleClick = () => {
        if (!value) {
          alert('Invalid State')
        } else {
            getPlaylist(value)
            navigate('/playlists')
            setValue('')
        }
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
      <Box className={styles.homeMain}>
        <Box className={styles.home}>
            <TextField className={styles.input} id="outlined-basic" label="Playlist link or Plylist Id" variant="outlined" value={value} onChange={handleChange} />
            <Button onClick={handleClick} className={styles.btn} variant="outlined">Add</Button>
        </Box>
        <HomePage name={"Favorites"} itemArray={favArray} favorites={favorites} title={"No favorite playlist"} />
        <HomePage name={"Recents"} itemArray={recentArray} favorites={favorites} title={"No recent playlist"} />
        <HomePage name={"Playlists"} itemArray={playlistArray} favorites={favorites} title={"No playlist available"} />
      </Box>
    )
}

export default Home