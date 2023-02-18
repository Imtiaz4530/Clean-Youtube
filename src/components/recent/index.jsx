import { Box } from "@mui/material";
import Name from "../../reusable/name";
import MapItem from "../../utils/MapItem";

const Recent = ({favorites, playlistArray}) => {
    return (
        <Box sx={{ padding: '0 350px' }}>
            {playlistArray.length > 0 && <Name name={playlistArray.length > 1 ? 'Recents' : 'Recent'} length={playlistArray.length} />}
            <MapItem itemArray={playlistArray} favorites={favorites} title={"No recent playlist"} />
        </Box>
    )
}

export default Recent