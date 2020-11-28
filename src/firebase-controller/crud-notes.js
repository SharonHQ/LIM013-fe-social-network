import { addNote, deleteNote } from '../firebase/note.js';

export const addNoteOnSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('input-new-note');
  const privacy = document.getElementById('checkbox-privacy');
  // const post = document.getElementById('textarea-update');

  addNote(input.value, privacy.checked)
    .then(() => {
      input.value = '';
      console.log('nota agregada exitosamente');
    }).catch(() => {
      input.value = '';
      console.log('Lo sentimos, no se pudo agregar la nota');
    });
};
export const updateNote = (objNote, text) => {
  const db = firebase.firestore();
  db.collection('notes').doc(objNote.id)
    .update({
      title: text,
    })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
    // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};

export const deleteNoteOnClick = objNote => deleteNote(objNote.id);
