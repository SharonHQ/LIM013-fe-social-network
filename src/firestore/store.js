import { user } from '../firebase/autentication.js';

export const inToUser = () => {
  const db = firebase.firestore();
  const currentUser = user();
  if (currentUser) {
    const userQa = {
      id: currentUser.uid,
      mail: currentUser.email,
      nombre: /^([^]+)@(\w+).(\w+)$/.exec(currentUser.email)[1],
      photo: '',
    };

    db.collection('users-qa')
      .add(userQa)
      .then((docRef) => {
        console.log(docRef);
      })
      .catch(e => console.log('error', e));
  }
};
