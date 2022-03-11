import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import DoneIcon from '@mui/icons-material/Done'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'
import { createTheme,ThemeProvider } from '@mui/material/styles'

function Editnote(props) {

    //  Edit note state
    const [noteeditor, setNoteeditor] = useState({
        IDN: props.notecontent.IDN,
        note_title: props.notecontent.note_title,
        note_content: props.notecontent.note_content
    })

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

      // Note editor input handler
    function noteEditorInputHandler(event) {

        const {name, value} = event.target

        if (name == "title") {
            setNoteeditor(prevInput => ({...prevInput, note_title: value}))
        } else {
            setNoteeditor(prevInput => ({...prevInput, note_content: value}))
        }
    }

    // Done button handler
    function donebuttonhandler() {
        props.editnotehandler(noteeditor)
        props.notecontenthandler(noteeditor)
        props.edittogglehandler(false)
    }

    return(
        <ThemeProvider theme={theme}>
            <div className='editnoteform' >
                <div className='notetitleform'>
                    <TextField onChange={noteEditorInputHandler} name="title" id="outlined-basic" label="Note title" variant="outlined" size="small" value={noteeditor.note_title} />
                </div>
                <div className="notecontentform">
                    <TextField
                        onChange={noteEditorInputHandler}
                        name="content"
                        id="outlined-multiline-static"
                        label="Note content"
                        multiline
                        size="small"
                        value={noteeditor.note_content}
                    />
                </div>
                <div className="notebuttonsform">
                    <IconButton onClick={() => props.edittogglehandler(false)} aria-label="Back" size="small" >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton onClick={() => donebuttonhandler()} aria-label="Done" size="small" >
                        <DoneIcon />
                    </IconButton>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Editnote