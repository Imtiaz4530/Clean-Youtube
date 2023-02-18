import { Typography } from "@mui/material"

const Name = ({name, length=null}) => {
  return (
      <Typography variant="h5" component="div" sx={{marginTop: 18,flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>{name} {length === null ? '' : ('('+length+')')}</Typography>
  )
}

export default Name