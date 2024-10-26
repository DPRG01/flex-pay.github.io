const facebookLink = document.getElementById('facebookLink');
const instagramLink = document.getElementById('instagramLink');
const twitterLink = document.getElementById('twitterLink');


const facebookImage = document.getElementById('facebookImage');
const instagramImage = document.getElementById('instagramImage');
const twitterImage = document.getElementById('twitterImage');

// Funciones para mostrar y ocultar imágenes
function showImage(imageElement) {
  imageElement.style.display = 'block';
}

function hideImage(imageElement) {
  imageElement.style.display = 'none';
}


facebookLink.addEventListener('mouseover', () => showImage(facebookImage));
facebookLink.addEventListener('mouseout', () => hideImage(facebookImage));

instagramLink.addEventListener('mouseover', () => showImage(instagramImage));
instagramLink.addEventListener('mouseout', () => hideImage(instagramImage));

twitterLink.addEventListener('mouseover', () => showImage(twitterImage));
twitterLink.addEventListener('mouseout', () => hideImage(twitterImage));


facebookLink.addEventListener('click', () => {
  window.location.href = 'https://www.facebook.com/'; // Cambia la URL por la del perfil de Facebook
});

instagramLink.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/'; // Cambia la URL por la del perfil de Instagram
});

twitterLink.addEventListener('click', () => {
  window.location.href = 'https://twitter.com/'; // Cambia la URL por la del perfil de Twitter
});
