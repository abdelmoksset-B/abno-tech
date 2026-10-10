const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.textContent = '☰';
}));


document.addEventListener('click', event => {
  const isOpen = nav.classList.contains('open');
  const clickedOutsideNav = !nav.contains(event.target);
  const clickedOutsideButton = !menuButton.contains(event.target);

  if (isOpen && clickedOutsideNav && clickedOutsideButton) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.textContent = '☰';
  }
});


document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const service = form.elements.service.value;
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent(`ABNO Tech project enquiry — ${service}`);
  const body = encodeURIComponent(`Hello ABNO Tech,\n\nMy name is ${name}.\nMy email: ${email}\nService: ${service}\n\nProject details:\n${message}\n\nThank you.`);
  window.location.href = `mailto:techabno@gmail.com?subject=${subject}&body=${body}`;
});
