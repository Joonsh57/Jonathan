const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
    const filter = button.dataset.filter;
    document.querySelectorAll('.skill').forEach((skill) => {
      skill.style.display = filter === 'all' || skill.dataset.type === filter ? 'flex' : 'none';
    });
  });
});

document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
