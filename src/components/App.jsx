import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dnotespace from './Dnotesspace/Dnotespace'
import Panel from './Panel/Panel'

function App() {

  // data TEST PROTOTYPE
  const IDPmaxFromDB = 3
  const IDNmaxFromDB = 6
  const pagesDataFromDB = [{
      IDP: 0,
      page_title: 'TestPage 0',
      page_notes: [
        {
          IDN: 0,
          note_title: 'TestTitleNote 0',
          note_content: 'TestNote 0'
        },
        {
          IDN: 1,
          note_title: 'TestTitleNote 1',
          note_content: 'TestNote 1'
        },
        {
          IDN: 2,
          note_title: 'TestTitleNote 2',
          note_content: 'TestNote 2'
        }
      ]
    },
    {
      IDP: 1,
      page_title: 'TestPage 1',
      page_notes: [
        {
          IDN: 3,
          note_title: 'TestTitleNote 0',
          note_content: 'TestNote 0'
        },
        {
          IDN: 4,
          note_title: 'TestTitleNote 1',
          note_content: 'TestNote 1'
        }
      ]
    },
    {
      IDP: 2,
      page_title: 'TestPage 2',
      page_notes: [
        {
          IDN: 5,
          note_title: 'TestTitle 0',
          note_content: 'TestNote 0'
        }
      ]
    }]

  // Data State
  const [pagesData, setPagesData] = useState(pagesDataFromDB)

  // Pages ID Generator
  const [IDPG, setIDPG] = useState(IDPmaxFromDB)

  // Notes ID Generator
  const [IDNG, setIDNG] = useState(IDNmaxFromDB)

  // Page selector state
  const [selectedPage, setSelectedPage] = useState(null)

  // Add note button display state
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
  function selectPageHandler(id) {
    setSelectedPage(pagesData.find(page => page.IDP == id))
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
      IDP: IDPG,
      page_title: title,
      page_notes: []
    }
    setIDPG(IDPG + 1)
    setPagesData(prevData => [...prevData, newPage])
    // TODO: DATABASE ADD PAGE

  }

  // Delete page handler
  function deletePageHandler(id) {
    if ((selectedPage != null)&&(selectedPage.IDP == id)) {
      setSelectedPage(null)
      setAddisplay(true)
    }
    setPagesData(prevPages => prevPages.filter(page => page.IDP != id ))
    // TODO: DATABASE DELETE PAGE

  }

// -----------------------------------------------------------------

// ------------------------ Notes Handles --------------------------
  // Add Note button handler
  function addNoteButtonHandler(change) {
    setAddisplay(change)
  }

  // Create Note handler
  function createNoteHandler(title,content) {
    const newNote = {
      IDN: IDNG,
      note_title: title,
      note_content: content
    }
    setIDNG(IDNG + 1)

    const addedNotePage = [...selectedPage.page_notes, newNote]
    const newSelectedPage = {...selectedPage, page_notes: addedNotePage}
    const newPagesData = pagesData.map(page => page.IDP == selectedPage.IDP ? newSelectedPage : page)
    setSelectedPage(newSelectedPage)
    setPagesData(newPagesData)
    // TODO: DATABASE ADD NOTE

  }

  // Delete Note handler
  function deleteNoteHandler(id) {

    const deletedNotePage = selectedPage.page_notes.filter((note) => note.IDN != id)
    const newSelectedPage = {...selectedPage, page_notes: deletedNotePage}
    const newPagesData = pagesData.map(page => page.IDP == selectedPage.IDP ? newSelectedPage : page)
    setSelectedPage(newSelectedPage)
    setPagesData(newPagesData)
    // TODO: DATABASE DELETE NOTE

  }

  // Edit Note handler
  function editNoteHandler(note) {
    const editedNotePage = selectedPage.page_notes.map((n) => n.IDN == note.IDN ? note : n )
    const newSelectedPage = {...selectedPage, page_notes: editedNotePage}
    const newPagesData = pagesData.map(page => page.IDP == selectedPage.IDP ? newSelectedPage : page)
    setSelectedPage(newSelectedPage)
    setPagesData(newPagesData)
    // TODO: DATABASE EDIT NOTE

  }

// -----------------------------------------------------------------

  return(
    <div className='container'>
      <Panel 
        data={pagesData}
        selectpage={selectPageHandler} 
        createpage={createPageHandler} 
        deletepage={deletePageHandler} 
      />
      <Dnotespace 
        selectedPage={selectedPage}
        closepage={closePageHandler} 
        addnotedisplay={addisplay} 
        addnotebutton={addNoteButtonHandler} 
        createnote={createNoteHandler} 
        deletenote={deleteNoteHandler} 
        editnotehandler={editNoteHandler}
      />
    </div>
  )
}

export default App