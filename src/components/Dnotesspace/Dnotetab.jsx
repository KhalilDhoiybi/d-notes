import React from 'react'
import Tabtitle from './Dnotetab/Tabtitle'
import Workspace from './Dnotetab/Workspace'
import './styles/dnotetab.css'

function Dnotetab(props) {
    return(
        <div className='dnotetab'>
            <Tabtitle {...props} />
            <Workspace {...props} />
        </div>
    )
}

export default Dnotetab