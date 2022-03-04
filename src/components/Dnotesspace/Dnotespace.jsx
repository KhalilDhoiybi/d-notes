import React from 'react'
import Dnotetab from './Dnotetab'
import Header from './Header'
import './styles/dnotespace.css'

function Dnotespace(props) {
    return(
        <div className='dnotespace'>
            <Header />
            <Dnotetab {...props} />
        </div>
    )
}

export default Dnotespace