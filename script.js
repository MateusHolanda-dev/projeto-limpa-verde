setTimeout(() => {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('main').classList.remove('hidden');
}, 3000);

document.getElementById('saibaMais').addEventListener('click', () => {
  alert('Em breve você poderá acessar seus desafios sustentáveis.');
});

const links = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('.conteudo');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    secoes.forEach(sec => sec.classList.remove('ativo'));
    const id = link.getAttribute('data-section');
    document.getElementById(id).classList.add('ativo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


