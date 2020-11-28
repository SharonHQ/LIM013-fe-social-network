export const inToUser = (user) => {
  const db = firebase.firestore();
  db.collection('users-qa')
    .doc(user.uid)
    .set(user)
    .then(() => user)
    .catch(e => e);
};

export const getUser = () => {
  const db = firebase.firestore();
  const uidUser = localStorage.getItem('iduser');
  return db.collection('users-qa').doc(uidUser).get();
};
