import React, { useState } from 'react'
import './styles/panelheader.css'

function PanelHeader() {

    // Date setting
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day:'numeric' }
    const currentDate = new Date().toLocaleDateString('en-UK',dateOptions)

    // Time setting
    const timeOptions = {hour: '2-digit', minute: '2-digit', hour12: true }
    const [time, seTtime] = useState()
    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString(timeOptions)
        seTtime(currentTime)
    },1000)


    return(
        <div className='panelheader'>
            <h4>Date | {currentDate} |</h4>
            <h4>Time | {time} |</h4>    
        </div>
    )
}

export default PanelHeader