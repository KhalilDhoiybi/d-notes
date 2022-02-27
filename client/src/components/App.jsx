import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div className='App'>Welcome to Dnotes.</div>
  )
}

export default App