// script.js
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });
}

function copyEmail(){
  const email = 'thomas.exemple@mail.com';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).then(()=> {
      alert('Email copié dans le presse-papier : ' + email);
    });
  } else {
    prompt('Copier cet email', email);
  }
}

function sendMail(evt){
  evt.preventDefault();
  const form = evt.target;
  const name = encodeURIComponent(form.name.value || 'Contact');
  const message = encodeURIComponent(form.message.value || '');
  const subject = encodeURIComponent('Contact portfolio — ' + name);
  const mailto = `mailto:thomas.exemple@mail.com?subject=${subject}&body=${message}`;
  window.location.href = mailto;
}
