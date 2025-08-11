const btn = document.getElementById('menu-btn');
const nav = document.getElementById('nav-bar');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  nav.classList.toggle('active');
});
