import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dnotespace from './Dnotesspace/Dnotespace'
import Panel from './Panel/Panel'

function App() {

  // Data fetching from the api
  // --------------------------------------------------------------
  // const [pages, setPages] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:5000/Dpages').then((response) => {
  //     setPages(response.data)
  //   })
  // }, [])
  // --------------------------------------------------------------

  // data TEST PROTOTYPE
  const pagesDatafromDB = [{_id: '1',page_title: 'test 1',page_notes: [{_id: '01',note_title: 'title-test 1',note_content: 'content_test 1'}]},{_id: '2',page_title: 'test 2',page_notes: [{_id: '02',note_title: 'title-test 2',note_content: 'content_test 2'}]},{_id: '3',page_title: 'test 3',page_notes: [{_id: '03',note_title: 'title-test 3',note_content: 'content_test 3'}]}]

  // data State
  const [pagesData, setPagesData] = useState(pagesDatafromDB)

  return(
    <div className='container'>
      <Panel data={pagesData} />
      <Dnotespace />
    </div>
  )
}

export default App