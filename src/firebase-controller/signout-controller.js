import { signOut } from '../firebase/autentication.js';

export const signOutUser = () => signOut()
  .then(() => {
    localStorage.removeItem('iduser');
    localStorage.clear();
    window.location.hash = '#/signin';
  });
