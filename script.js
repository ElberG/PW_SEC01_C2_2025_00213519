const toggleLayoutBtn = document.getElementById('toggle-layout');
const contenido = document.getElementById('contenido');
toggleLayoutBtn.addEventListener('click', () => {
  contenido.classList.toggle('stacked');
});

const changeTitleBtn = document.getElementById('change-title');
const pageTitle = document.getElementById('page-title');
changeTitleBtn.addEventListener('click', () => {
  const nuevo = prompt('Nuevo título de la página:', pageTitle.textContent.trim());
  if (nuevo && nuevo.trim().length > 0) pageTitle.textContent = nuevo.trim();
});

const toggleDescColorBtn = document.getElementById('toggle-desc-color');
const descripcion = document.getElementById('descripcion');
toggleDescColorBtn.addEventListener('click', () => {
  descripcion.classList.toggle('color-alt');
});

const addImageBtn = document.getElementById('add-image');
const fileInput = document.getElementById('hidden-file');
const imageHolder = document.getElementById('image-holder');

function placeImage(src, alt = 'Imagen del libro') {
  imageHolder.innerHTML = '';
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  imageHolder.appendChild(img);
}

addImageBtn.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files && fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => placeImage(e.target.result, file.name);
    reader.readAsDataURL(file);
  } else {
    const url = prompt('Pegue la URL de la imagen (opcional si canceló el archivo):');
    if (url && url.trim()) {
      placeImage(url.trim(), 'Imagen por URL');
    }
  }
});