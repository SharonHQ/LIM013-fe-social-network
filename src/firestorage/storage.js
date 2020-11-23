export const uploadProfileImg = (file) => {
  const name = file.name;
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const metaData = {
    contentType: File.type,
  };
  const task = storageRef.child(name).put(file, metaData);

  task.then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      alert('Foto de perfil actualizada');
      const img = document.querySelector('.img-edit-user-profile');
      img.src = url;
    });
};
