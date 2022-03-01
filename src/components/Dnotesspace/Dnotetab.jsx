import React from 'react'
import Tabtitle from './Dnotetab/Tabtitle'
import Workspace from './Dnotetab/Workspace'
import './styles/dnotetab.css'

function Dnotetab() {
    return(
        <div className='dnotetab'>
            <Tabtitle />
            <Workspace />
        </div>
    )
}

export default Dnotetab