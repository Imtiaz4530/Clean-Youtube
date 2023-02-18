import { Card, Typography } from "@mui/material"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import styles from "../player.module.css"

const Sidebar = ({desc}) => {
  return (
    <Card className={styles.sidebar}>
        <Typography gutterBottom variant="h6" component="div" sx={{color: '#222', fontSize: 15, marginTop: 2}}>{desc.length < 1750 ? desc : desc.slice(0, 1750) + "..."}</Typography>
        <DoubleArrowIcon className={styles.arrowIcon} />
    </Card>
  )
}

export default Sidebar