document.addEventListener('DOMContentLoaded', function () {
  const botaoTema = document.getElementById('toggle-tema');
  const body = document.body;

  // Verifica tema salvo no navegador
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'escuro') {
    body.classList.add('modo-escuro');
  }

  botaoTema.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');

    // Salva preferência no navegador
    if (body.classList.contains('modo-escuro')) {
      localStorage.setItem('tema', 'escuro');
    } else {
      localStorage.setItem('tema', 'claro');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-tema');
  const body = document.body;

  // Alternar tema
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  });

  // Projetos com links para suas pastas de projeto
  const projetos = [
    {
      nome: "Cinemattos",
      descricao: "Site de catálogo de séries, feito com HTML, CSS e JS.",
      link: "projetos/Projeto1/index.html"  // Link para o projeto Cinemattos
    },
    {
      nome: "JB Site",
      descricao: "Site sobre Justin Bieber, com sua Discografia, feito com HTML e CSS.",
      link: "projetos/projeto2/index.html"
    },
    {
      nome: "Casa do Terror",
      descricao: "Site simples onde mostra a planta de uma casa Mal Assombrada",
      link: "projetos/projeto3/index.html"
    }
  ];

  const containerProjetos = document.getElementById('lista-projetos');

  projetos.forEach(p => {
    const card = document.createElement('div');
    card.innerHTML = `
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
    `;
    containerProjetos.appendChild(card);
  });

  // Validação do formulário de contato
  const form = document.getElementById('form-contato');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome) {
      alert('Por favor, preencha seu nome.');
      form.nome.focus();
      return;
    }

    if (!email || !validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      form.email.focus();
      return;
    }

    if (!mensagem) {
      alert('Por favor, escreva sua mensagem.');
      form.mensagem.focus();
      return;
    }

    alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});