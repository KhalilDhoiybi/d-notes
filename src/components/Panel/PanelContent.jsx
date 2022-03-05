import React, { useState } from 'react'
import Pageindex from './Pageindex'
import TextField from '@mui/material/TextField'
import { createTheme,ThemeProvider } from '@mui/material/styles'
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import './styles/panelcontent.css'
import Pageempty from './Pageempty'

function PanelContent(props) {

    // mui color theme
    const theme = createTheme({
        palette: {
          primary: {
              main: '#483434',
              light: '#483434',
              contrastText: '#483434'
          }
        }
      });
    
    // Input text state
    const [newPageInput, setNewPageInput] = useState('')
    // Zoom in button state
    const [isRender, setIsRender] = useState(false)
    
    // Input handler
    function inputHandler(event) {

        const value = event.target.value

        // Input trigger conditions
        if (value) {
            setIsRender(true)
        } else {
            setIsRender(false)
        }
        setNewPageInput(value)
    }

    return(
        <div className='panelcontent'>
            <div className='pagestitle'>
                <h4>Dnotes Pages</h4>
            </div>
            <div className='pagesnavbar'>
                {
                    props.info.data.length > 0 ?
                    props.info.data.map((page,index) => <Pageindex key={page._id} index={index} pagename={page.page_title} handler={props.selectpage} />) :
                    <Pageempty />
                }
            </div>
            <div className='newpagemenu'>
                <ThemeProvider theme={theme}>
                    <TextField
                    className='newpageinput'
                    label="Add new"
                    id="filled-basic-small"
                    variant="filled"
                    size="small"
                    color='primary'
                    onChange={inputHandler}
                    value={newPageInput}
                    />
                    <Zoom in={isRender} >
                        <IconButton aria-label="add new page">
                            <AddIcon />
                        </IconButton>
                    </Zoom>  
                </ThemeProvider>
            
            </div>
        </div>
    )
}

export default PanelContent