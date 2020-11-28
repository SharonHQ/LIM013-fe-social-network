import { getUser } from './store.js';

export const addNote = (textNewNote, privacy) => getUser()
  .then(doc => doc.data())
  .then(data => firebase.firestore().collection('notes').add({
    ...data,
    title: textNewNote,
    state: privacy,
  }));

export const deleteNote = idNote => firebase.firestore().collection('notes').doc(idNote).delete();

export const getNotes = callback => firebase.firestore().collection('notes')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    callback(data);
  });
