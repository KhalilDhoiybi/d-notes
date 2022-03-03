import React from 'react'
import Pageindex from './Pageindex'
import TextField from '@mui/material/TextField'
import { createTheme,ThemeProvider } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import './styles/panelcontent.css'

function PanelContent() {

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

    const pages = ['Prototype 1','Prototype 2','Prototype 4','Prototype 5','Prototype 6','Prototype 7','Prototype 8','Prototype 9','Prototype 10']

    return(
        <div className='panelcontent'>
            <div className='pagestitle'>
                <h4>Dnotes Pages</h4>
            </div>
            <div className='pagesnavbar'>
                {pages.map((page) => <Pageindex pagename={page} />)}
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
                    />
                    <IconButton aria-label="add new page">
                        <AddIcon fontSize='inherit' />
                    </IconButton>
                </ThemeProvider>
            
            </div>
        </div>
    )
}

export default PanelContent