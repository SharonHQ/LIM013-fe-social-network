import { signOutUser } from '../firebase-controller/signout-controller.js';
import { uploadProfileImg } from '../firebase/storage.js';

export default (data) => {
  const viewProfile = `
    <nav class="menu-profile">
      <ul>
        <a href="#/profile"><img class="img-user-profile" src=${data.photo}></a>
        <a href="#/home"><img src="./img/logo-lab-white.svg"></a>
        <a href="#"><i id="logout" class="fas fa-sign-out-alt logout-profile"></i></a>
      </ul>
    </nav>
    <section class="user-edit-profile">
      <img class="img-edit-user-profile" src=${data.photo}>
      <i class="fas fa-camera camera-profile"></i>
      <input id="file" type ="file"/>
      <h3 class="name-user">${data.name}</h3>
      <i class="fas fa-pencil-alt icon-edit-profile" id="open"></i>
      
      <p class="correo-profile">${data.mail}</p>
      <div id="mask" class="hidden"></div>
      <section id="modal" class="hidden">
        <form>
          <p>Nombre de usuario</p>
          <input class ="email-signin" type="text" id="name" name="user_mail" placeholder="Ingresa tu nombre" value=${data.name} required>
          <input id="close" class="submit-signin" type="submit" id="signin" value="Guardar Cambios">
        </form>
      </section>
    </section>
    <section class="post">
      <section class="own-post-profile">
        <i class="fas fa-ellipsis-v icon-more-profile"></i>
          <div class="dropdown-content">
            <li>Editar</li>
            <li href="#">Borrar</li>
          </div>
        <textarea class="text-own-post" disabled>Hola, ¿Alguien me puede recomendar un video de configuración de firebase?
        </textarea>
      </section>
    </section>
    `;
  const db = firebase.firestore();
  document.getElementById('container').classList.remove('main');
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position-profile');
  sectionElement.innerHTML = viewProfile;

  const logout = sectionElement.querySelector('#logout');
  logout.addEventListener('click', () => {
    signOutUser();
  });

  const camera = sectionElement.querySelector('.camera-profile');
  const file = sectionElement.querySelector('#file');
  camera.addEventListener('click', () => {
    file.click();
    file.addEventListener('change', () => {
      const photo = file.files[0];
      uploadProfileImg(photo);
    });
  });

  const open = sectionElement.querySelector('#open');
  const close = sectionElement.querySelector('#close');
  const modal = sectionElement.querySelector('#modal');
  const mask = sectionElement.querySelector('#mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  close.addEventListener('click', () => {
    const newName = sectionElement.querySelector('#name').value;
    const uidUser = localStorage.getItem('iduser');
    db.collection('users-qa').doc(uidUser).update({
      name: newName,
    })
      .then(() => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  });
  mask.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  return sectionElement;
};
