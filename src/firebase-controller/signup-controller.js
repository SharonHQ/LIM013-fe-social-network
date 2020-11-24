import { createUserAccount, user } from '../firebase/autentication.js';
import { inToUser } from '../firebase/store.js';

const imgDefault = 'gs://qa-lab-c5336.appspot.com/user-default.svg';
export const createUser = (email, password) => {
  const messageError = document.getElementById('errorMessage');
  createUserAccount(email, password)
    .then(() => {
      window.location.hash = '#/home';
      return user();
    })
    .then((currentUser) => {
      inToUser({
        uid: currentUser.uid,
        mail: currentUser.email,
        name: /^([^]+)@(\w+).(\w+)$/.exec(currentUser.email)[1],
        photo: imgDefault,
        pass: password,
      });
    })
    .catch((e) => {
      messageError.innerHTML = e.message;
      return messageError;
    });
};
