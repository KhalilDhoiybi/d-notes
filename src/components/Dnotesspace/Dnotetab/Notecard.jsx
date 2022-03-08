import React, { Fragment, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'
import { createTheme,ThemeProvider } from '@mui/material/styles'
import './styles/notecard.css'


function Notecard(props) {

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

    //  Edit note state
    const [noteeditor, setNoteeditor] = useState({
        title: props.info.selectedPage.page_notes[props.index].note_title,
        content: props.info.selectedPage.page_notes[props.index].note_content
    })

    // note editor handler
    function noteEditorHandler(event) {

        const {name, value} = event.target

        if (name == "title") {
            setNoteeditor(prevInput => ({...prevInput, title: value}))
        } else {
            setNoteeditor(prevInput => ({...prevInput, content: value}))
        }
    }
 
    function NoteCard() {
        return(
            <div className="notecontainer">
                <div className="notecontent">
                    <h4>{props.info.selectedPage.page_notes[props.index].note_title}</h4>
                    <div className='notetext'>{props.info.selectedPage.page_notes[props.index].note_content}</div>
                </div>
                <div className="notebuttons">
                    <IconButton onClick={() => props.editnotebutton(props.id) } aria-label="edit" size="small">
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton onClick={() => props.deletenote(props.id)} aria-label="delete" size="small">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </div>
        )
    }

    function NoteEdit() {
        return(
            <ThemeProvider theme={theme}>
                <div className='editnoteform' >
                    <div className='notetitleform'>
                        <TextField onChange={noteEditorHandler} name="title" id="outlined-basic" label="Note title" variant="outlined" size="small" value={noteeditor.title} />
                    </div>
                    <div className="notecontentform">
                        <TextField
                            onChange={noteEditorHandler}
                            name="content"
                            id="outlined-multiline-static"
                            label="Note content"
                            multiline
                            size="small"
                            value={noteeditor.content}
                        />
                    </div>
                    <div className="notebuttonsform">
                        <IconButton onClick={() => props.editnotebutton(null)} aria-label="Back" size="small" >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton aria-label="Done" size="small" >
                            <DoneIcon />
                        </IconButton>
                    </div>
                </div>
            </ThemeProvider>
        )
    }

    return(
        <div className='notecard'>
            {props.editnotedisplay == props.id ? NoteEdit() : NoteCard()}    
        </div>
    )
}

export default Notecard