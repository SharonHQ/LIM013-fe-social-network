import { signInUserAccount, user } from '../firebase/autentication.js';

export const signInUser = (email, password) => {
  const messageError = document.getElementById('errorMessage');
  signInUserAccount(email, password)
    .then(() => user())
    .then((currentUser) => {
      localStorage.setItem('iduser', currentUser.uid);
      window.location.hash = '#/home';
    })
    .catch((e) => {
      messageError.innerHTML = e.message;
      return messageError;
    });
};
