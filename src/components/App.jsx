import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dnotespace from './Dnotesspace/Dnotespace'
import Panel from './Panel/Panel'

function App() {

  // data TEST PROTOTYPE
  const pagesDatafromDB = [{_id: '1',page_title: 'test 1',page_notes: [{_id: '01',note_title: 'title-test 1',note_content: 'content_test 1'},{_id: '011',note_title: 'title-test 11',note_content: 'content_test 11'},{_id: '0111',note_title: 'title-test 111',note_content: 'content_test 111'}]},{_id: '2',page_title: 'test 2',page_notes: [{_id: '02',note_title: 'title-test 2',note_content: 'content_test 2'},{_id: '022',note_title: 'title-test 22',note_content: 'content_test 22'}]},{_id: '3',page_title: 'test 3',page_notes: [{_id: '03',note_title: 'title-test 3',note_content: 'content_test 3'}]}]
  const singlePageTest = pagesDatafromDB[0]


  // Data State
  const [pagesData, setPagesData] = useState(pagesDatafromDB)

  // Page selector state
  const [selectedPage, setSelectedPage] = useState(null)

  // Data/State/info object
  const info = {data: pagesData, selectedPage: selectedPage}

  // Add button note display state
  const [addisplay, setAddisplay] = useState(true)



  // Data fetching from the api
  // --------------------------------------------------------------
  // const [pages, setPages] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:5000/Dpages').then((response) => {
  //     setPages(response.data)
  //   })
  // }, [])
  // --------------------------------------------------------------

  
// ------------------------- Page Handles -------------------------

  // Select page handler
  function selectPageHandler(index) {
    setSelectedPage(pagesData[index])
    setAddisplay(true)
  }

  // Close page handler
  function closePageHandler() {
    selectPageHandler(null)
    setAddisplay(true)
  }

  // Create page handler
  function createPageHandler(title) {
    const newPage = {
      _id: pagesData.length+1,
      page_title: title,
      page_notes: []
    }

    setPagesData(prevData => [...prevData,newPage])
  }

  // Delete page handler
  function deletePageHandler(index,id) {
    if (selectedPage._id == id) {
      selectPageHandler(null)
      setAddisplay(true)

    }
    setPagesData(prevPages => prevPages.filter((page, i) => i != index ))
  }

// ----------------------------------------------------------------

// ------------------------ Notes Handles --------------------------
  // Add Note button handler
  function addNoteButtonHandler(change) {
    setAddisplay(change)
  }

// -----------------------------------------------------------------

  return(
    <div className='container'>
      <Panel info={info} selectpage={selectPageHandler} createpage={createPageHandler} deletepage={deletePageHandler} />
      <Dnotespace info={info} closepage={closePageHandler} addnotedisplay={addisplay} addnotebutton={addNoteButtonHandler} />
    </div>
  )
}

export default App