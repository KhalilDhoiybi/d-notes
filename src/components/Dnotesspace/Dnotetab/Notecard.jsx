import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/notecard.css'

function Notecard() {

    const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis quia neque dignissimos.'

    return(
        <div className="notecard">
            <div className="notecontent">
                <h4>Test</h4>
                <p>{txt} </p>
            </div>
            <div className="notedelete">
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            </div>
        </div>
    )
}

export default Notecard