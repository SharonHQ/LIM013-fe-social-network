import { signInWithGoogle, user } from '../firebase/autentication.js';
import { inToUser } from '../firebase/store.js';

const provider = new firebase.auth.GoogleAuthProvider();

export const googleAccount = () => {
  const messageError = document.getElementById('errorMessage');
  signInWithGoogle(provider)
    .then(() => user())
    .then((currentUser) => {
      inToUser({
        uid: currentUser.uid,
        mail: currentUser.email,
        name: currentUser.displayName,
        photo: currentUser.photoURL,
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
