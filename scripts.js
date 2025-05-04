// script.js

// Scroll suave e destaque de seção ativa
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  // Atualiza o destaque do link ativo ao rolar
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      if (scrollY > section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
        links.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href=\"#${section.id}\"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });

  // Validação do formulário de carreira
  const form = document.getElementById('job-form');
  const messageDiv = document.querySelector('.form-message');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const position = form.position.value.trim();
    const portfolio = form.portfolio.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !position || !message) {
      showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showMessage('Por favor, insira um email válido.', 'error');
      return;
    }

    // Simula envio bem-sucedido
    form.reset();
    showMessage('Sua candidatura foi enviada com sucesso!', 'success');
  });

  function validateEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }

  function showMessage(msg, type) {
    messageDiv.textContent = msg;
    messageDiv.style.color = type === 'error' ? 'red' : 'limegreen';
    messageDiv.style.marginTop = '1rem';
  }
});
