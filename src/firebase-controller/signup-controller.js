import { createUserAccount, user } from '../firebase/autentication.js';
import { inToUser } from '../firebase/store.js';

const imgDefault = 'https://firebasestorage.googleapis.com/v0/b/qa-lab-c5336.appspot.com/o/user-default.svg?alt=media&token=121e65e8-2723-4e7a-88cd-0581c3c8d6a9';
export const createUser = (email, password) => {
  const messageError = document.getElementById('errorMessage');
  createUserAccount(email, password)
    .then(() => user())
    .then((currentUser) => {
      inToUser({
        uid: currentUser.uid,
        mail: currentUser.email,
        name: /^([^]+)@(\w+).(\w+)$/.exec(currentUser.email)[1],
        photo: imgDefault,
      });
      localStorage.setItem('iduser', currentUser.uid);
    })
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch((e) => {
      messageError.innerHTML = e.message;
      return messageError;
    });
};
