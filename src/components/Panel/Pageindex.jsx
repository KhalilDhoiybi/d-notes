import React from 'react'
import './styles/pageindex.css'

function Pageindex(props) {
    return(
        <div className='pageindex'>
            <h4>{props.pagename}</h4>
            <button>delete</button>
        </div>
    )
}

export default Pageindex