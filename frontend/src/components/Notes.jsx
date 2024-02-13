import React from 'react'
import CreateNoteForm from './CreateNoteForm';
import Note from './Note';

const Notes = () => {
  return (
    <>
      <h1>Notes</h1>
      <CreateNoteForm />
      <Note />
    </>
  )
}

export default Notes