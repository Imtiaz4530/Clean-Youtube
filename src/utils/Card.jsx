import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useStoreActions } from "easy-peasy";
import {Link as linkRoute} from 'react-router-dom';

import styles from './card.module.css'

const Cards = ({playlistId, items, favorites}) => {
    const {favorites: {addToFavorite, removeToFavorite}, recents:{addToRecent}} = useStoreActions((action) => action)
    
    const handleFavorite = () => {
        if (!favorites?.data.includes(playlistId)) {
            addToFavorite(playlistId)
        } else {
            removeToFavorite(playlistId)
        }
        
    }
    const handleWatch = () => {
        addToRecent(playlistId)
    }
    
    return (
        <Card className={styles.playlistItem} sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 160 }}
            image={items?.playlistThumbnail.url}
            title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'white', fontSize: 17, marginTop: 2}}> {items?.playlistTitle.length > 23 ? (items?.playlistTitle.slice(0, 23) + '...') : (items?.playlistTitle)} </Typography>
                <Typography sx={{marginTop: 1, color: 'rgb(245 245 245 / 60%)'}} variant="body2" color="text.secondary">{items?.channelTitle}</Typography>
            </CardContent>
            <CardActions className={styles.btns}>
                <Link to={`/playlists/${playlistId}`} sx={{textDecoration: 'none'}} component={linkRoute}><Button className={styles.watchBTN} onClick={handleWatch} variant="outlined"><PlayCircleOutlineIcon sx={{ fontSize: 22, marginRight:0.5 }}/> Watch Now</Button></Link>
                {(favorites && favorites?.data.includes(playlistId)) ?  <FavoriteIcon onClick={handleFavorite} className={styles.heartBTN} /> : <FavoriteBorderIcon onClick={handleFavorite} className={styles.heartBTN} /> }
            </CardActions>
        </Card>
    )
}

export default Cards