import { Box } from "@mui/material";
import Name from "../../reusable/name";
import MapItem from "../../utils/MapItem";

import styles from './fav.module.css'

const Favorite = ({ favorites, playlistArray}) => {
    return (
        <Box className={styles.homeMain}>
            {playlistArray.length > 0 && <Name name={playlistArray.length > 1 ? 'Favorites' : 'Favorite'} length={playlistArray.length} />}
            <MapItem itemArray={playlistArray} favorites={favorites} title={"No favorite playlist"} />
        </Box>
    )
}

export default Favorite