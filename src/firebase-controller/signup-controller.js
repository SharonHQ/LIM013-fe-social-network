import { createUserAccount } from '../firebase/autentication.js';

export const createUser = (email, password) => {
  const messageError = document.getElementById('errorMessage');
  createUserAccount(email, password)
    .then(() => {
      messageError.innerHTML = '';
      window.location.hash = '#/home';
    })
    .catch((e) => {
      messageError.innerHTML = e.message;
      return messageError;
    });
};
