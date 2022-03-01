import React from 'react'
import Pageindex from './Pageindex'
import './styles/panelcontent.css'

function PanelContent() {

    const pages = ['page 1','page 2','page 3']

    return(
        <div className='panelcontent'>
            <div className='pagestitle'>
                <h4>Dnotes Pages</h4>
            </div>
            <div className='pagesnavbar'>
                {pages.map((page) => <Pageindex pagename={page} />)}
            </div>
            <div className='newpagemenu'></div>
        </div>
    )
}

export default PanelContent