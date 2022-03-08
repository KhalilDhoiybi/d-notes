import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import './styles/notecard.css'

function Notecard(props) {

    return(
        <div className="notecard">
            <div className="notecontent">
                <h4>{props.info.selectedPage.page_notes[props.index].note_title}</h4>
                <div className='notetext'>{props.info.selectedPage.page_notes[props.index].note_content}</div>
            </div>
            <div className="notebuttons">
                <IconButton aria-label="edit" size="small">
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={() => props.deletenote(props.id)} aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    )
}

export default Notecard