export const inToUser = (user) => {
  const db = firebase.firestore();
  db.collection('users-qa')
    .doc(user.uid)
    .set(user)
    .then(() => user)
    .catch(e => e);
};

export const getUser = (callback) => {
  const db = firebase.firestore();
  const uidUser = localStorage.getItem('iduser');
  db.collection('users-qa').doc(uidUser)
    .get()
    .then(doc => (doc.exists ? callback(doc.data()) : 'No such document!'))
    .catch(error => error);
};
