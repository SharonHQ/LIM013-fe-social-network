import { signOutUser } from '../firebase-controller/signout-controller.js';
import { addNoteOnSubmit } from '../firebase-controller/crud-notes.js';

const itemNote = (objNote) => {
  const postElement = document.createElement('section');
  postElement.classList.add('publicSide');
  postElement.innerHTML = `
    <img class="publicPicture" src=${objNote.photo}>
    <p class="publicName">${objNote.name}</p>
    <textarea class="publicPosts">${objNote.title}</textarea>
  `;
  return postElement;
};

export default (data) => {
  const viewHome = `
    <header class="mainHead">
        <img id="profileView" class="userPicture" src=${data.photo}>
        <img src="./img/logo-lab-white.svg" alt="Q&A" class="logo">
        <i class="fas fa-sign-out-alt" id="signOutButton"></i>
    </header>
    <aside class="side">
        <img class="userPictureAside" src=${data.photo}>
        <p class="userName">${data.name}</p>
        <p class="userEmail">${data.mail}</p>
    </aside>
    <article class="content">
        <textarea id="input-new-note" class="inputPosts" placeholder="Escribe tu pregunta aquí" ></textarea>
        <button class="btn-add-note" type="submit" id="postsButton" >Publicar</button>
        <section class="publicSide" id="notes-list">
        </section>
    </article> 
    
    `;
  const sectionElement = document.createElement('div');
  sectionElement.classList.add('homeContainer');
  sectionElement.innerHTML = viewHome;

  const buttonAddNote = sectionElement.querySelector('.btn-add-note');
  const ul = sectionElement.querySelector('#notes-list');
  data.forEach(note => ul.appendChild(itemNote(note)));
  buttonAddNote.addEventListener('click', addNoteOnSubmit);

  const signOutButton = sectionElement.querySelector('#signOutButton');
  signOutButton.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  const profileView = sectionElement.querySelector('#profileView');
  profileView.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/profile';
  });

  return sectionElement;
};
