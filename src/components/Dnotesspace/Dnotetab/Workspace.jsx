import React from 'react'
import Addnote from './Addnote'
import Notecard from './Notecard'
import './styles/workspace.css'

function Workspace() {
    return(
        <div className='workspace'>
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
            <Addnote />
        </div>
    )
}

export default Workspace