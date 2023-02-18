import { Link, Typography } from "@mui/material"
import {Link as linkRoute} from 'react-router-dom';
import TurnRightIcon from '@mui/icons-material/TurnRight';

const NotFound = () => {
    return (
         <Typography gutterBottom variant="h3" component="div" sx={{color: 'black', marginTop: 35, textAlign: 'center'}}>You are visiting wrong route. Please go back to <Link to='/' component={linkRoute} sx={{ textDecoration: 'none', color: 'black' }}>Home <TurnRightIcon sx={{fontSize: 45}} /> </Link></Typography>   
    )
}

export default NotFound