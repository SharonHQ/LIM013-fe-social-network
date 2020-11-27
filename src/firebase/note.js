export const addNote = (textNewNote) => {
  const uidUser = localStorage.getItem('iduser');
  firebase.firestore().collection('notes').add({
    uid: uidUser,
    title: textNewNote,
    state: false,
  });
};

export const deleteNote = idNote => firebase.firestore().collection('notes').doc(idNote).delete();

export const getNotes = callback => firebase.firestore().collection('notes')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    callback(data);
  });
