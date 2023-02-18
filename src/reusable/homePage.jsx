import { Box } from '@mui/material'
import MapItem from '../utils/MapItem'
import Name from './name'

const HomePage = ({ name, itemArray, favorites, title }) => {

    return (
        <Box>
            <Name name={name} />
            <MapItem itemArray={itemArray} favorites={favorites} title={title} />
        </Box>
    )
}

export default HomePage