import React, { Fragment } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
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

    function NoteCard() {
        return(
            <Fragment>
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
            </Fragment>
        )
    }

    function NoteEdit() {
        return(
            <div>Test</div>
        )
    }

    return(
        <div className="notecard">
            {props.editnotedisplay == props.id ? NoteEdit() : NoteCard()}    
        </div>
    )
}

export default Notecard