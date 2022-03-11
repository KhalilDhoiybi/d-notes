import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import './styles/notecontent.css'

function Notecontent(props) {

    return(
        <div className="notecontainer">
            <div className="notecontent">
                <h4>{props.notecontent.note_title}</h4>
                <div className='notetext'>{props.notecontent.note_content}</div>
            </div>
            <div className="notebuttons">
                <IconButton onClick={() => props.edittogglehandler(true)} aria-label="edit" size="small">
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={() => props.deletenote(props.notecontent.IDN)} aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    )
}

export default Notecontent