import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes, setCreateForm, setIsEdit, setEditNoteId } from '../Redux/reducers/notesSlice';

const useNoteActions = () => {
  const dispatch = useDispatch();
  const { notes, createForm, isEdit, editNoteId } = useSelector((state) => state.notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:3000/notes');
    dispatch(setNotes(response.data.notes));
  };

  const updateCreateFromField = (e) => {
    const { name, value } = e.target;
    dispatch(setCreateForm({
      ...createForm,
      [name]: value
    }));
  };

  const createOrUpdateNote = async (e) => {
    e.preventDefault();

    if (isEdit === false) {
      // create the note
      const res = await axios.post('http://localhost:3000/notes', createForm);
      // update state
      dispatch(setNotes([
        ...notes, res.data.note
      ]));
    } else {
      // edit the note
      const res = await axios.put(`http://localhost:3000/notes/${editNoteId}`, createForm);

      // update the state
      const updatedNotes = notes.map(note => note._id === editNoteId ? res.data.note : note);
      dispatch(setNotes(updatedNotes));

      // reset edit mode
      dispatch(setIsEdit(false));
      dispatch(setEditNoteId(null));
    }

    // clear form state 
    dispatch(setCreateForm({ title: '', body: '' }));
  };

  const deleteNote = async (id) => {
    // delete the note 
    const res = await axios.delete(`http://localhost:3000/notes/${id}`);

    // update state
    const filteredNotes = notes.filter(note => note._id !== id);
    dispatch(setNotes(filteredNotes));
  };

  const editNote = (id) => {
    // find the note that has to be edited
    const noteToEdit = notes.find(note => note._id === id);

    // set edit note form data for editing
    if (noteToEdit) {
      dispatch(setCreateForm({
        title: noteToEdit.title,
        body: noteToEdit.body,
      }));
    }

    // set edit mode and edit note id 
    dispatch(setIsEdit(true));
    dispatch(setEditNoteId(id));
  };

  return {
    updateCreateFromField,
    createOrUpdateNote,
    deleteNote,
    editNote,
  };
};

export default useNoteActions;
