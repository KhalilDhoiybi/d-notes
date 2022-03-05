import React, { Fragment } from 'react'
import Addnote from './Addnote'
import Notecard from './Notecard'
import './styles/workspace.css'

function Workspace(props) {

    function fetchNotes(props) {
        if (props.info.selectedPage != null) {
            return(
                <Fragment>
                    {props.info.selectedPage.page_notes.map((note,index) => <Notecard key={note._id} index={index} {...props} />)}
                    <Addnote />                    
                </Fragment>
            )
        } else {
            return(
                <div className='unselectedmsg'>
                    <h1>Select page or create new one.</h1>
                </div>
            )
        }
    }

    return(
        <div className='workspace'>
            {fetchNotes(props)}    
        </div>
    )
}

export default Workspace