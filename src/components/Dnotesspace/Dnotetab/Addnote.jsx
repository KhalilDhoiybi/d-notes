import React from 'react'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'
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

    function AddNoteButton() {
        return(
            <div className='addnotebutton'>
                <IconButton onClick={() => props.addnotebutton(false)} aria-label="add new note" size='large'>
                    <AddIcon fontSize='large'/>
                </IconButton>
            </div>
        )
    }

    function AddNoteForm() {
        return(
            <ThemeProvider theme={theme}>
                <div className='addnoteform' >
                    <div className='notetitleform'>
                        <TextField id="outlined-basic" label="Note title" variant="outlined" size="small" />
                    </div>
                    <div className="notecontentform">
                        <TextField
                            id="outlined-multiline-static"
                            label="Note content"
                            multiline
                            rows={3}
                            size="small"
                        />
                    </div>
                    <div className="notebuttonsform">
                    <IconButton onClick={() => props.addnotebutton(true)} aria-label="Back" size="small" >
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
        <div className='addnote'>
            {props.addnotedisplay ? AddNoteButton() : AddNoteForm()}
        </div>
    )
}

export default Addnote