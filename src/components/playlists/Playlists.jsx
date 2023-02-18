import { Box, Typography } from '@mui/material'
import Name from '../../reusable/name'
import MapItem from '../../utils/MapItem'

import styles from './playlists.module.css'

const Playlists = ({ favorites, playlistArray }) => {
    return (
        <Box className={styles.homeMain}>
            {playlistArray.length > 0 && <Name name={playlistArray.length > 1 ? 'Playlists' : 'Playlist'} length={playlistArray.length} />}
            <MapItem itemArray={playlistArray} favorites={favorites} title={"No Playlist videos"} />
        </Box>
    )
}

export default Playlists
