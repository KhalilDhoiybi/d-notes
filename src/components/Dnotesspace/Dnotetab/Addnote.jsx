import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'
import Zoom from '@mui/material/Zoom'
import { createTheme,ThemeProvider } from '@mui/material/styles'
import './styles/addnote.css'

function Addnote(props) {

    // mui color theme
    const theme = createTheme({
        palette: {
          primary: {
              main: '#271c1c',
              light: '#271c1c',
              contrastText: '#271c1c'
          }
        }
      })

    // New note state
    const [newNoteInput, setNewNoteInput] = useState({note_title: '',note_content: ''})

    // Done button render state
    const [doneRender, setDoneRender] = useState(false)

    // New note input handler
    function newNoteIputHandler(event) {

        const {name, value} = event.target

        if (name == "title") {
            setNewNoteInput(prevInput => ({...prevInput, note_title: value}))
        } else {
            setNewNoteInput(prevInput => ({...prevInput, note_content: value}))
        }

        if (newNoteInput.note_title != '' && newNoteInput.note_content != '' && value) {
            setDoneRender(true)
        } else {
            setDoneRender(false)
        }
        // TODO: Fix done button render
    }
    
    // Add new note handler
    function addNewNoteHandler() {
        props.createnote(newNoteInput.note_title,newNoteInput.note_content)
        props.addnotebutton(true)
        setNewNoteInput({note_title: '',note_content: ''})
        setDoneRender(false)
    }

    // Add new note button handler
    function addNewNoteButtonHandler() {
        props.addnotebutton(false)
        setNewNoteInput({note_title: '',note_content: ''})
        setDoneRender(false)
    }
    
    // + Button rendrer
    function AddNoteButton() {
        return(
            <div className='addnotebutton'>
                <IconButton onClick={addNewNoteButtonHandler} aria-label="add new note" size='large'>
                    <AddIcon fontSize='large'/>
                </IconButton>
            </div>
        )
    }

    // Add new form rendrer
    function AddNoteForm() {
        return(
            <ThemeProvider theme={theme}>
                <div className='addnoteform' >
                    <div className='notetitleform'>
                        <TextField 
                            onChange={newNoteIputHandler} 
                            name="title" 
                            id="outlined-basic" 
                            label="Note title" 
                            variant="outlined" 
                            size="small" 
                            value={newNoteInput.note_title} 
                        />
                    </div>
                    <div className="notecontentform">
                        <TextField
                            onChange={newNoteIputHandler}
                            name="content"
                            id="outlined-multiline-static"
                            label="Note content"
                            multiline
                            rows={3}
                            size="small"
                            value={newNoteInput.note_content}
                        />
                    </div>
                    <div className="notebuttonsform">
                        <IconButton onClick={() => props.addnotebutton(true)} aria-label="Back" size="small" >
                            <ArrowBackIcon />
                        </IconButton>
                        <Zoom in={doneRender} >
                            <IconButton onClick={addNewNoteHandler} aria-label="Done" size="small" >
                                <DoneIcon />
                            </IconButton>
                        </Zoom>
                    </div>
                </div>
            </ThemeProvider>
        )
    }

    return(
        <div className='addnote'>
            {props.addnotedisplay ? AddNoteButton() : AddNoteForm()}
        </div>
    )
}

export default Addnote