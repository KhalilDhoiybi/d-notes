import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import './styles/addnote.css'

function Addnote() {
    return(
        <div className='addnote'>
            <IconButton aria-label="add new note" size='large'>
                <AddIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Addnote