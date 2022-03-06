import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import Grow from '@mui/material/Grow'
import './styles/addnote.css'

function Addnote(props) {


    function AddNoteButton() {
        return(
            <Grow direction='up' in={props.addnotedisplay} >
                <div className='addnotebutton'>
                    <IconButton onClick={() => props.addnotebutton(false)} aria-label="add new note" size='large'>
                        <AddIcon fontSize='large'/>
                    </IconButton>
                </div>
            </Grow>
        )
    }

    function AddNoteForm() {
        return(
            <Grow direction='down' in={!props.addnotedisplay} >
                <div className='addnoteform' >
                    Test
                </div>                
            </Grow>  
        )
    }

    return(
        <div className='addnote'>
            {props.addnotedisplay ? AddNoteButton() : AddNoteForm()}
        </div>
    )
}

export default Addnote