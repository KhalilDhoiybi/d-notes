import React from 'react'
import Dnotetab from './Dnotetab'
import Header from './Header'
import './styles/dnotespace.css'

function Dnotespace() {
    return(
        <div className='dnotespace'>
            <Header />
            <Dnotetab />
        </div>
    )
}

export default Dnotespace