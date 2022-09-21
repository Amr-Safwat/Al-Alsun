let icon = document.querySelector('header i');
let links = document.querySelector('header .links');

icon.onclick = () => {
  links.classList.toggle('fill-hei');
}