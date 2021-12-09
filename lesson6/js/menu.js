
const menuBtn = document.querySelector('.btn-menu');
const menav = document.querySelector('#nav-menu');

menuBtn.addEventListener('click', () =>
{menav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('responsive')};