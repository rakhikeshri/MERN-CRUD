import React from 'react'
import { useSelector } from 'react-redux';
import useNoteActions from '../utils/useNoteActions';

const CreateNoteForm = () => {
    const { createForm, isEdit } = useSelector((state) => state.notes);
    const {
      updateCreateFromField,
      createOrUpdateNote,
    } = useNoteActions();
  
    return (
        <form onSubmit={createOrUpdateNote}>
            <input value={createForm.title} type="text" placeholder='note title' name='title'
                onChange={updateCreateFromField} />
            <br />
            <br />

            <textarea name="body" value={createForm.body} id="noteBody" cols="21" rows="5" placeholder='enter note body'
                onChange={updateCreateFromField}
            ></textarea>

            <br />

            <input type='submit' value={isEdit ? 'Edit Note' : 'Add Note'} />
        </form>
    )
}

export default CreateNoteForm