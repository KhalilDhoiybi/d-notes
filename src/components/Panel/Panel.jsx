import React from 'react'
import PanelHeader from './PanelHeader'
import PanelContent from './PanelContent'
import PanelFooter from './PanelFooter'
import './styles/panel.css'

function Panel(props) {
    return(
        <div className='panel'>
            <PanelHeader />
            <PanelContent data={props.data} />
            <PanelFooter />
        </div>
    )
}

export default Panel