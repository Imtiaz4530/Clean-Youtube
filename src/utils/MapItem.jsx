import { Box, Typography } from "@mui/material"
import Cards from "./Card"
import styles from './mapItem.module.css'

const MapItem = ({ itemArray, favorites, title }) => {
    return (
        <Box className={styles.playlists}>
            {itemArray.length === 0 ? 
                <Typography variant="h4" component="div" sx={{ textAlign:'center', marginTop: 15,flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>{title}</Typography> :
                <Box className={styles.playlistsItems}>
                    {itemArray.map((playlist) => (
                        <Cards key={playlist.playlistId} items={playlist} playlistId={playlist.playlistId} favorites={favorites} />
                    ))}
                </Box>
            }
        </Box>
    )
}

export default MapItem