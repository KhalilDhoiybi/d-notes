import React, { useState } from 'react'
import Editnote from './Editnote'
import Notecontent from './Notecontent'
import './styles/notecard.css'


function Notecard(props) {

    // Note content state
    const [notecontent, setNotecontent] = useState({
        IDN: props.id,
        note_title: props.selectedPage.page_notes.find(note => note.IDN == props.id).note_title,
        note_content: props.selectedPage.page_notes.find(note => note.IDN == props.id).note_content
    })

    // Edit button state
    const [edittoggle, setEdittoggle] = useState(false)

    // Note content handler
    function notecontenthandler(newNote) {
        setNotecontent(newNote)
    }

    // Edit toggle handler
    function edittogglehandler(change) {
        setEdittoggle(change)
    }

    return(
        <div className='notecard'>
            {edittoggle ? 
                <Editnote notecontent={notecontent} notecontenthandler={notecontenthandler} edittogglehandler={edittogglehandler} {...props} /> : 
                <Notecontent notecontent={notecontent} edittogglehandler={edittogglehandler} {...props}
            />}    
        </div>
    )
}

export default Notecard