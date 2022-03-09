import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import './styles/tabtitle.css'

function Tabtitle(props) {
    return(
        <div className='tabtitle'>
            <h4>{props.selectedPage != null ? props.selectedPage.page_title : 'Notes space'}</h4>
            <IconButton onClick={() => props.closepage()} aria-label="close" size="small">
                <CloseIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default Tabtitle