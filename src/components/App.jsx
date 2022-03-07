import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dnotespace from './Dnotesspace/Dnotespace'
import Panel from './Panel/Panel'

function App() {

  // data TEST PROTOTYPE
  const pagesDatafromDB = [{id: '0',page_title: 'test 0',page_notes: [{id: '0',note_title: 'title-test 1',note_content: 'content_test 1'},{id: '1',note_title: 'title-test 11',note_content: 'content_test 11'},{id: '2',note_title: 'title-test 111',note_content: 'content_test 111'}]},{id: '1',page_title: 'test 1',page_notes: [{id: '0',note_title: 'title-test 0',note_content: 'content_test 0'},{id: '1',note_title: 'title-test 1',note_content: 'content_test 22'}]},{id: '2',page_title: 'test 2',page_notes: [{id: '0',note_title: 'title-test 2',note_content: 'content_test 2'}]}]
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


  // Insert new note function
  function insertNewNote() {
    const updatedPaged = pagesData.map(page => page.id == selectedPage.id ? selectedPage : page)
    setPagesData(updatedPaged)
    
  }

// ------------------------- Page Handles -------------------------

  // Select page handler
  function selectPageHandler(index) {
    if (selectedPage != null) {
      insertNewNote()
    }
    setSelectedPage(pagesData[index])
    setAddisplay(true)
  }

  // Close page handler
  function closePageHandler() {
    if (selectedPage != null) {
      insertNewNote()      
    }
    selectPageHandler(null)
    setAddisplay(true)
  }

  // Create page handler
  function createPageHandler(title) {
    const newPage = {
      id: pagesData.length,
      page_title: title,
      page_notes: []
    }

    setPagesData(prevData => [...prevData,newPage])
  }

  // Delete page handler
  function deletePageHandler(index,id) {
    if (selectedPage.id == id) {
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

  // Create Note handler
  function createNoteHandler(title,content) {
    const newNote = {
      id: selectedPage.page_notes.length,
      note_title: title,
      note_content: content
    }
    
    setSelectedPage(prevPage => ({...prevPage, page_notes: [...prevPage.page_notes, newNote]}))
    insertNewNote()

  }

// -----------------------------------------------------------------

  return(
    <div className='container'>
      <Panel info={info} selectpage={selectPageHandler} createpage={createPageHandler} deletepage={deletePageHandler} />
      <Dnotespace info={info} closepage={closePageHandler} addnotedisplay={addisplay} addnotebutton={addNoteButtonHandler} createnote={createNoteHandler} />
    </div>
  )
}

export default App