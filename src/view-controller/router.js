import { components } from '../view/components.js';
import { getUser } from '../firebase/store.js';
import { getNotes } from '../firebase/note.js';

export const changeView = (route) => {
  window.location.hash = route;

  const container = document.getElementById('container');
  container.innerHTML = '';
  let chosenRoute = '';
  switch (route) {
    case '': chosenRoute = container.appendChild(components.signup());
      break;
    case '#/': chosenRoute = container.appendChild(components.signup());
      break;
    case '#/home':
      getUser()
        .then((doc) => {
          if (doc.exists) {
            getNotes((notes) => {
              container.innerHTML = '';
              chosenRoute = container.appendChild(components.home(doc.data(), notes));
            });
          }
        })
        .catch(error => error);
      break;
    case '#/signup': chosenRoute = container.appendChild(components.signup());
      break;
    case '#/signin': chosenRoute = container.appendChild(components.signin());
      break;
    case '#/profile':
      getUser()
        .then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            getNotes((notes) => {
              const notesUser = [];
              notes.forEach((note) => {
                if (userData.uid === note.uid) {
                  notesUser.push(note);
                }
                return notesUser;
              });
              container.innerHTML = '';
              chosenRoute = container.appendChild(components.profile(userData, notesUser));
            });
          }
        })
        .catch(error => error);
      break;
    default: chosenRoute = container.appendChild(components.different());
      break;
  }
  return chosenRoute;
};
