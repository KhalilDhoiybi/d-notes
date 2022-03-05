import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/pageindex.css'

function Pageindex(props) {
    return(
        <div className='pageindex'>
            <h4 onClick={() => props.handler(props.index)} >{props.pagename}</h4>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default Pageindex