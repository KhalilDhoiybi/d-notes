import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dnotespace from './Dnotesspace/Dnotespace'
import Panel from './Panel/Panel'

function App() {

  // data TEST PROTOTYPE
  const pagesDatafromDB = [{page_title: 'test 0',page_notes: [{note_title: 'title-test 1',note_content: 'content_test 1'},{note_title: 'title-test 11',note_content: 'content_test 11'},{note_title: 'title-test 111',note_content: 'content_test 111'}]},{page_title: 'test 1',page_notes: [{note_title: 'title-test 0',note_content: 'content_test 0'},{note_title: 'title-test 1',note_content: 'content_test 22'}]},{page_title: 'test 2',page_notes: [{note_title: 'title-test 2',note_content: 'content_test 2'}]}]

  // Data State
  const [pagesData, setPagesData] = useState(pagesDatafromDB)

  // Page selector state
  const [selectedPage, setSelectedPage] = useState(null)

  // Data/State/info object
  const info = {data: pagesData, selectedPage: selectedPage}

  // Add note button display state
  const [addisplay, setAddisplay] = useState(true)
  
  // Edit note button state NoteID/null
  const [editdisplay, setEditdisplay] = useState(null)



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
  function updateNewPage() {
    const updatedPaged = pagesData.map(page => page.page_title == selectedPage.page_title ? selectedPage : page)
    setPagesData(updatedPaged)
    
  }

// ------------------------- Page Handles -------------------------

  // Select page handler
  function selectPageHandler(index) {
    if (selectedPage != null) {
      updateNewPage()
    }
    setSelectedPage(pagesData[index])
    setAddisplay(true)
    setEditdisplay(null)
  }

  // Close page handler
  function closePageHandler() {
    if (selectedPage != null) {
      updateNewPage()      
    }
    selectPageHandler(null)
    setAddisplay(true)
    setEditdisplay(null)
  }

  // Create page handler
  function createPageHandler(title) {
    const newPage = {
      page_title: title,
      page_notes: []
    }

    setPagesData(prevData => [...prevData,newPage])
  }

  // Delete page handler
  function deletePageHandler(index,title) {
    if (selectedPage.page_title == title) {
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
    setEditdisplay(null)
  }

  // Edit Note button handler
  function editNoteButtonHandler(change) {
    setEditdisplay(change)
    setAddisplay(true)
  }

  // Create Note handler
  function createNoteHandler(title,content) {
    const newNote = {
      note_title: title,
      note_content: content
    }
    
    setSelectedPage(prevPage => ({...prevPage, page_notes: [...prevPage.page_notes, newNote]}))
    updateNewPage()

  }

  // Delete Note handler
  function deleteNoteHandler(index) {

    const deletedNotePage = selectedPage.page_notes.filter((note,i) => i != index)
    console.log(deletedNotePage);
    setSelectedPage(prevPage => ({...prevPage, page_notes: deletedNotePage}))
    updateNewPage()
  }

  // Edit Note handler
  function editNoteHandler(index,note) {
    const editedNotePage = selectedPage.page_notes.map((n,i) => i == index ? note : n )
    const updatedSelectPage = new Promise((resolve,reject) => {
      resolve(editedNotePage)
    })
    updatedSelectPage.then((res) => {
      console.log(res);
      setSelectedPage(prevPage => ({...prevPage, page_notes: res}))
      console.log(selectedPage);
      updateNewPage()
      setEditdisplay(null)
      
    })
  }

// -----------------------------------------------------------------

  return(
    <div className='container'>
      <Panel 
        info={info} 
        selectpage={selectPageHandler} 
        createpage={createPageHandler} 
        deletepage={deletePageHandler} 
      />
      <Dnotespace 
        pagesData={pagesData}
        selectedPage={selectedPage}
        closepage={closePageHandler} 
        addnotedisplay={addisplay} 
        addnotebutton={addNoteButtonHandler} 
        createnote={createNoteHandler} 
        deletenote={deleteNoteHandler} 
        editnotedisplay={editdisplay} 
        editnotebutton={editNoteButtonHandler} 
        editnotehandler={editNoteHandler}
      />
    </div>
  )
}

export default App