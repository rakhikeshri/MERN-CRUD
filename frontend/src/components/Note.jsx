import React from 'react'
import { useSelector } from 'react-redux';
import useNoteActions from '../utils/useNoteActions';


const Note = () => {
    const { notes } = useSelector((state) => state.notes);
    const {
        deleteNote,
        editNote,
    } = useNoteActions();

    return (
        <>
            {
                notes && notes.map(note => {
                    return (
                        <div key={note._id}>
                            <h2>{note.title}</h2>
                            <h3>{note.body}</h3>
                            <button onClick={() => deleteNote(note._id)}>Delete</button>
                            <button onClick={() => editNote(note._id)}>Edit</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Note