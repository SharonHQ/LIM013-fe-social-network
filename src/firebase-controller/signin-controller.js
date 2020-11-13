import { signInUserAccount } from '../firebase/autentication.js';

export const signInUser = (email, password) => {
  const messageError = document.getElementById('errorMessage');
  signInUserAccount(email, password)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch((e) => {
      messageError.innerHTML = e.message;
      return messageError;
    });
};
