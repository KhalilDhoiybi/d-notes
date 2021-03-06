import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dnotespace from './Dnotesspace/Dnotespace'
import Panel from './Panel/Panel'

function App() {

  // Data State
  const [pagesData, setPagesData] = useState([])

  // Pages ID Generator
  const [IDPG, setIDPG] = useState(0)

  // Notes ID Generator
  const [IDNG, setIDNG] = useState(0)

  // Page selector state
  const [selectedPage, setSelectedPage] = useState(null)

  // Add note button display state
  const [addisplay, setAddisplay] = useState(true)
  

  // Data Manipulation from api
  // --------------------------------------------------------------

  useEffect(() => {
    axios.get('http://localhost:5000/dpages').then((response) => {
      setPagesData(response.data)
    })

    axios.get('http://localhost:5000/idpg').then((response) => {
      setIDPG(response.data[0].IDPG)
    })

    axios.get('http://localhost:5000/idng').then((response) => {
      setIDNG(response.data[0].IDNG)
    })

  }, [])

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
    // POST NEW PAGE TO DB
    axios.post('http://localhost:5000/createPage',newPage)
    // PATCH IDPG FROM DB
    axios.patch(`http://localhost:5000/updateidpg/${IDPG+1}`)

    // Update states
    setIDPG(IDPG + 1)
    setPagesData(prevData => [...prevData, newPage])
    
  }

  // Delete page handler
  function deletePageHandler(id) {
    if ((selectedPage != null)&&(selectedPage.IDP == id)) {
      setSelectedPage(null)
      setAddisplay(true)
    }
    // DELETE PAGE FROM DB
    axios.delete(`http://localhost:5000/deletePage/${id}`)

    // Update states
    setPagesData(prevPages => prevPages.filter(page => page.IDP != id ))

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

    // PUT NEW NOTE TO DB
    axios.put(`http://localhost:5000/addNote/${selectedPage.IDP}`,newNote)

    // PATCH IDNG FROM DB
    axios.patch(`http://localhost:5000/updateidng/${IDNG+1}`)

    // Update states
    setIDNG(IDNG + 1)
    const addedNotePage = [...selectedPage.page_notes, newNote]
    const newSelectedPage = {...selectedPage, page_notes: addedNotePage}
    const newPagesData = pagesData.map(page => page.IDP == selectedPage.IDP ? newSelectedPage : page)
    setSelectedPage(newSelectedPage)
    setPagesData(newPagesData)

  }

  // Delete Note handler
  function deleteNoteHandler(id) {

    // DELETE NOTE FROM DB
    axios.delete(`http://localhost:5000/deleteNote/${selectedPage.IDP}/${id}`)

    // Update states
    const deletedNotePage = selectedPage.page_notes.filter((note) => note.IDN != id)
    const newSelectedPage = {...selectedPage, page_notes: deletedNotePage}
    const newPagesData = pagesData.map(page => page.IDP == selectedPage.IDP ? newSelectedPage : page)
    setSelectedPage(newSelectedPage)
    setPagesData(newPagesData)

  }

  // Edit Note handler
  function editNoteHandler(note) {

    // PATCH NOTE FROM DB
    axios.patch(`http://localhost:5000/updateNote/${selectedPage.IDP}/${note.IDN}`,note)

    // Update states
    const editedNotePage = selectedPage.page_notes.map((n) => n.IDN == note.IDN ? note : n )
    const newSelectedPage = {...selectedPage, page_notes: editedNotePage}
    const newPagesData = pagesData.map(page => page.IDP == selectedPage.IDP ? newSelectedPage : page)
    setSelectedPage(newSelectedPage)
    setPagesData(newPagesData)

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