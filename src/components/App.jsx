import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dnotespace from './Dnotesspace/Dnotespace'
import Panel from './Panel/Panel'

function App() {

  // Data fetching from the api
  // --------------------------------------------------------------
  const [pages, setPages] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/Dpages').then((response) => {
      setPages(response.data)
    })
  }, [])
  // --------------------------------------------------------------

  return(
    <div className='container'>
      <Panel />
      <Dnotespace />
    </div>
  )
}

export default App