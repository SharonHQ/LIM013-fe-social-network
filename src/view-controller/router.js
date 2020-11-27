import { components } from '../view/components.js';
import { getUser } from '../firebase/store.js';

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
      getUser((data) => {
        chosenRoute = container.appendChild(components.home(data));
      });
      break;
    case '#/signup': chosenRoute = container.appendChild(components.signup());
      break;
    case '#/signin': chosenRoute = container.appendChild(components.signin());
      break;
    case '#/profile':
      getUser((data) => {
        chosenRoute = container.appendChild(components.profile(data));
      });
      break;
    default: chosenRoute = container.appendChild(components.different());
      break;
  }
  return chosenRoute;
};
