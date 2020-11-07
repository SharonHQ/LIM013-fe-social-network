import { createUserAccount } from '../firebase/auth.js';

export const createUser = (email, password) => {
  createUserAccount(email, password)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch((e) => {
      const messageError = document.createElement('p');
      messageError.innerHTML = e.message;
      document.getElementById('container').appendChild(messageError);
      return messageError;
    });
};
