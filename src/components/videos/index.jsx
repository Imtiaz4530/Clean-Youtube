import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import Video from "./video";

import styles from './videos.module.css'

const Videos = () => {
  const {playlistId} = useParams()
  const playlists = useStoreState(state => state.playlists.data)
  const {playlistTitle, channelTitle, playlistDescription, playlistThumbnail, playlistItem} = playlists[playlistId]

  return (
      <Box className={styles.videos}>
          <Typography variant="h4" component="div" sx={{color: 'white' ,marginTop: 14, textAlign: 'center', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>{playlistTitle}</Typography>
          <Typography variant="p" component="div" sx={{color: 'white', margin: '5px 0', textAlign: 'center', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>By {channelTitle}</Typography>
          <Box className={styles.mainBox}>
              <Box className={styles.box1}>
                  <Card className={styles.playlistItem} sx={{ width: '100%', height: 560 }}>
                    <CardMedia
                    sx={{ height: 300 }}
                    image={playlistThumbnail?.url}
                    title="green iguana"
                    />
                    <CardContent>
                        {playlistDescription.length === 0 ? (<Typography gutterBottom variant="h4" component="div" sx={{color: 'white', fontSize: 25, marginTop: 10, textAlign: 'center'}}>{playlistTitle}</Typography>) : 
                        (<Typography gutterBottom variant="h6" component="div" sx={{color: 'white', fontSize: 17, marginTop: 2}}> {playlistDescription.length > 80 ? playlistDescription.slice(0, 550) + "..." : playlistDescription}</Typography>)}
                    </CardContent>
                  </Card>
              </Box>

              <Box className={styles.playlistsItems}>
                  {playlistItem.length === 0 ? <Typography variant="h4" component="div" sx={{color: 'white' ,marginTop: 14, textAlign: 'center' }}>No Videos</Typography> : (
                      playlistItem.map((item) => (<Video key={item.contentDetails.videoId} thumbnail={item?.thumbnail?.url} title={item?.title} playlistId={playlistId} videoId={item?.contentDetails?.videoId} />))
                  )}
              </Box>
          </Box>
      </Box>
  )
}

export default Videos