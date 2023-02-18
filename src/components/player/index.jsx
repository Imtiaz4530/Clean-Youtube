import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player/youtube';
import { Box, Typography } from "@mui/material";

import styles from "./player.module.css"
import Sidebar from "./sidebar/sidebar";
import { useStoreState } from "easy-peasy";

const Player = () => {
    const {playlistId, videoId} = useParams()
    const playlists = useStoreState(state => state.playlists.data)
    const playlist = playlists[playlistId]?.playlistItem
    const video = playlist.filter((item) => item?.contentDetails?.videoId === videoId)
    const desc = video[0].description

    return (
        <Box className={styles.playerWrapper}>
            <ReactPlayer
                className={styles.reactPlayer}
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width='65%'
                height='65%'
                controls
            />

            <Sidebar desc={desc} />
        </Box>
    )
}

export default Player