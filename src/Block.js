import { Box } from '@mui/material'
import { useState } from 'react'

function Block() {
    let [state, setState] = useState(true);
    return (
      <Box sx={{p: 1, border: "1px solid black", width: "20px", height: "20px"}} onClick={()=>{setState(false)}}>
          {state ? ' ' : 'X'}
      </Box> 
    );
}

export default Block;