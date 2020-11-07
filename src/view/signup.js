import { createUser } from '../firebase-controller/signup-controller.js';

export default () => {
  const viewSignUp = `
  <h1>Q&A LABORATORIA</h1>
  <h2>Regístrate para que seas parte de la comunidad de ayuda</h2>
  <form id="signup-form">
    <label for="mail">Correo Electrónico</label>
    <input type="email" id="mail" name="user_mail">
    <label for="password">Contraseña</label>
    <input type="password" id="password" name="user_password">
    <input type="submit" id="signup" value="Registrarme">
    <p class="">¿Tienes una cuenta? <a href="#/signin"><span class="">Inicia Sesión</span></a></p>
  </form>
  `;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position');
  sectionElement.innerHTML = viewSignUp;
  const form = sectionElement.querySelector('#signup-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = sectionElement.querySelector('#mail').value;
    const password = sectionElement.querySelector('#password').value;
    createUser(email, password);
  });
  return sectionElement;
};
