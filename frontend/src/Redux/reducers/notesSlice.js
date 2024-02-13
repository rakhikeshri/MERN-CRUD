import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: null,
  isEdit: false,
  editNoteId: null,
  createForm: {
    title: '',
    body: ''
  },
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setCreateForm: (state, action) => {
      state.createForm = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setEditNoteId: (state, action) => {
      state.editNoteId = action.payload;
    },
  },
});

export const { setNotes, setCreateForm, setIsEdit, setEditNoteId } = notesSlice.actions;
export default notesSlice.reducer;
