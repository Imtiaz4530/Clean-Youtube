import { Card, Link, CardContent, CardMedia, Typography } from "@mui/material"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {Link as linkRoute} from 'react-router-dom';

import styles from './video.module.css'

const Video = ({ thumbnail, title, videoId, playlistId }) => {
    return (
        <Card className={styles.playlistItem} sx={{ maxWidth: 345 }}>
            <Link to={`/playlists/${playlistId}/${videoId}`} sx={{textDecoration: 'none'}} component={linkRoute} >
                <CardMedia
                className={styles.videoThumbnail}
                image={thumbnail}
                title="green iguana"
                />
                <PlayCircleOutlineIcon className={styles.playBtn} />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'white', fontSize: 17, marginTop: 2}}>{title}</Typography>
            </CardContent>
        </Card>
    )
}

export default Video