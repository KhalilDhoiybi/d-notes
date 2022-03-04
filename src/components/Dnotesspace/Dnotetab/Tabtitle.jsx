import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import './styles/tabtitle.css'

function Tabtitle(props) {
    return(
        <div className='tabtitle'>
            <h4>{props.info.selectedPage != null ? props.info.selectedPage.page_title : 'Untitled'}</h4>
            <IconButton aria-label="close" size="small">
                <CloseIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default Tabtitle