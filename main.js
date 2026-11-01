const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btn.setAttribute('aria-expanded', aberto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('aberto');
    btn.setAttribute('aria-expanded', 'false');
  }
});

const links = document.querySelectorAll('.menu a');
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observador.observe(s));

document.getElementById('ano').textContent = new Date().getFullYear();
