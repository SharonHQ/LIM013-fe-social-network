import { addNote, deleteNote } from '../firebase/note.js';

export const addNoteOnSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('input-new-note');

  addNote(input.value)
    .then(() => {
      input.value = '';
      console.log('nota agregada exitosamente');
    }).catch(() => {
      input.value = '';
      console.log('Lo sentimos, no se pudo agregar la nota');
    });
};

export const deleteNoteOnClick = objNote => deleteNote(objNote.id);
