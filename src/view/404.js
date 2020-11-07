export default () => {
  const viewLogIn = `
  <h1>Not found</h1>`;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position');
  sectionElement.innerHTML = viewLogIn;
  return sectionElement;
};
