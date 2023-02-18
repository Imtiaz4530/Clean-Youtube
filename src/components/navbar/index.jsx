import {AppBar, Box, Toolbar, Typography, Button, Link} from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import {Link as linkRoute} from 'react-router-dom';

import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <Box>
      <AppBar className={styles.nav} component="nav">
        <Toolbar>
          <CleaningServicesIcon sx={{color: 'white'}} />
          <Typography variant="h5" component="div" sx={{ marginLeft:2 ,flexGrow: 1, display: { xs: 'none', sm: 'block' }}}><Link className={styles.link} to='/' component={linkRoute}> CLEAN YOUTUBE </Link></Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Link to='/playlists' sx={{textDecoration: 'none'}} component={linkRoute}><PlaylistPlayIcon sx={{fontSize: 35, color: 'white'}} /></Link> 
              <Link to='/favorites' sx={{textDecoration: 'none'}} component={linkRoute}><FavoriteBorderIcon sx={{marginLeft:5,fontSize: 35, color: 'white'}} /></Link> 
              <Link to='/recent' sx={{textDecoration: 'none'}} component={linkRoute}><HistoryIcon sx={{marginLeft:5, fontSize: 35, color: 'white'}} /></Link> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;