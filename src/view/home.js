import { inToUser } from '../firestore/store.js';

export default () => {
  const viewHome = `
  <h1>Q&A LABORATORIA</h1>`;
  inToUser();
  document.getElementById('container').classList.remove('main');
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position');
  sectionElement.innerHTML = viewHome;
  return sectionElement;
};
