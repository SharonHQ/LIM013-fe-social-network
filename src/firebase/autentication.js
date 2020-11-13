const auth = () => firebase.auth();

export const createUserAccount = (email, password) => auth()
  .createUserWithEmailAndPassword(email, password);

export const signInUserAccount = (email, password) => auth()
  .signInWithEmailAndPassword(email, password);

export const signInWithGoogle = provider => auth()
  .signInWithPopup(provider);
