// Lógica do Dropdown
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Fecha o dropdown ao clicar fora
document.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar-title')) {
    dropdownMenu.classList.remove('active');
  }
});

