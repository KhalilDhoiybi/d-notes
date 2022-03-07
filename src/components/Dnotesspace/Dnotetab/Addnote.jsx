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

    const [newNoteInput, setNewNoteInput] = useState({title: '',content: ''})

    const [doneRender, setDoneRender] = useState(false)

    // New note input handler
    function newNoteIputHandler(event) {

        const {name, value} = event.target

        if (name == "title") {
            setNewNoteInput(prevInput => ({...prevInput, title: value}))
        } else {
            setNewNoteInput(prevInput => ({...prevInput, content: value}))
        }

        if (newNoteInput.title != '' && newNoteInput.content != '' && value) {
            setDoneRender(true)
        } else {
            setDoneRender(false)
        }
    }
    
    // Add new note handler
    function addNewNoteHandler() {
        props.createnote(newNoteInput.title,newNoteInput.content)
        setNewNoteInput({title: '',content: ''})
        setDoneRender(false)
    }

    // Add new note button handler
    function addNewNoteButtonHandler() {
        setNewNoteInput({title: '',content: ''})
        props.addnotebutton(false)
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
                        <TextField onChange={newNoteIputHandler} name="title" id="outlined-basic" label="Note title" variant="outlined" size="small" value={newNoteInput.title} />
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
                            value={newNoteInput.content}
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