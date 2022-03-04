import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/notecard.css'

function Notecard(props) {

    return(
        <div className="notecard">
            <div className="notecontent">
                <h4>{props.info.selectedPage.page_notes[props.index].note_title}</h4>
                <p>{props.info.selectedPage.page_notes[props.index].note_content}</p>
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