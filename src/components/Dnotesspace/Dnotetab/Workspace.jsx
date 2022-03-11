import React, { Fragment } from 'react'
import Addnote from './Addnote'
import Notecard from './Notecard'
import './styles/workspace.css'

function Workspace(props) {

    function fetchNotes() {
        return(
            <Fragment>
                {props.selectedPage.page_notes.map((note,index) => <Notecard 
                    key={`${props.selectedPage.IDP}${note.IDN}`}
                    index={index}
                    id={note.IDN}
                    {...props} 
                />)}
                <Addnote {...props} />                    
            </Fragment>
        )
    }

    function unselectedlayout() {
        return(
            <div className='unselectedmsg'>
                <h1>Select page or create new one.</h1>
            </div>
        )
    }

    return(
        <div className='workspace'>
            {props.selectedPage != null ? fetchNotes() : unselectedlayout()}    
        </div>
    )
}

export default Workspace