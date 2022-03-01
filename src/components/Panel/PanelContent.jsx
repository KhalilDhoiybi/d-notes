import React from 'react'
import Pageindex from './Pageindex'
import TextField from '@mui/material/TextField'
import { createTheme,ThemeProvider } from '@mui/material/styles';
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

    const pages = ['page 1','page 2','page 3']

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
                    label="New page"
                    id="standard-basic-small"
                    variant="filled"
                    size="small"
                    color='primary'
                    />
                </ThemeProvider>
            
            </div>
        </div>
    )
}

export default PanelContent