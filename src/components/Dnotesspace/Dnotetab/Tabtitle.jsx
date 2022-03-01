import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import './styles/tabtitle.css'

function Tabtitle() {
    return(
        <div className='tabtitle'>
            <h4>Untitled - Page</h4>
            <IconButton aria-label="close" size="small">
                <CloseIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default Tabtitle