export default () => {
  const viewProfile = `
    <nav>
      <ul>
        <li><a href="#"><img src=""></a></li>
        <li><a href="#"><img src=""></a></li>
        <li><a href="#"><img src=""></a></li>
      </ul>
    </nav>
  <h1>Q&A LABORATORIA</h1>`;
  document.getElementById('container').classList.remove('main');
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position');
  sectionElement.innerHTML = viewProfile;
  return sectionElement;
};
