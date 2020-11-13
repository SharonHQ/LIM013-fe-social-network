import { createUser } from '../firebase-controller/signup-controller.js';

export default () => {
  const viewSignUp = `
  <img src="./img/home.svg" class="img-home">
  <form id="form">
    <img class="logo-signin" src="./img/logo-lab-black.svg" alt="">
    <p class="text-signin">Una red social para preguntas y respuestas hecho por laboratorians y para laboratorians.</p>
    <button type="button" class="button-google-signin"><img src="./img/logo-google.svg" class="google-icon"alt="">Google</button>
    <div class="line">
      <span class="text-signin">
        O continua con
      </span>
    </div>
    <input class ="email-signin" type="email" id="email" name="user_mail" placeholder="Ingresa tu correo electrónico" required>
    <input class = "password-signin" type="password" id="password" name="user_password" placeholder="Ingresa tu contraseña" required>
    <p id= "errorMessage" class="text-signin red"></p>
    <input class="submit-signin" type="submit" id="signin" value="Registrarte">
    <p class="text-signin">¿Ya tienes una cuenta? <a href="#/signin"><span class="change-form">Iniciar Sesión</span></a></p>
  </form>
  `;
  document.getElementById('container').classList.add('main');
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position-signin');
  sectionElement.innerHTML = viewSignUp;
  const form = sectionElement.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = sectionElement.querySelector('#email').value;
    const password = sectionElement.querySelector('#password').value;
    createUser(email, password);
  });
  return sectionElement;
};
