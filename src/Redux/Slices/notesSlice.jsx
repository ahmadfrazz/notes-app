import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, { payload }) => {
      const newNote = {
        id: state.allNotes.length + 1,
        note: payload.note,
      };
      state.allNotes.push(newNote);
    },
    clearNotes: (state) => {
      state.allNotes = [];
    },
    updateNote: (state, { payload }) => {
      const { id, posX, posY } = payload;
      const existingNote = state.allNotes.find((note) => note?.id === id);
      if (existingNote) {
        existingNote.posX = posX;
        existingNote.posY = posY;
      }
    },
  },
});

export const { addNote, clearNotes, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
