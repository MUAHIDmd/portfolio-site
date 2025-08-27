// AVRX TECH interactions
const menuBtn = document.getElementById('menu');
menuBtn?.addEventListener('click', ()=>{
  const nav = document.querySelector('header nav');
  if(!nav) return;
  if (getComputedStyle(nav).display === 'none') {
    nav.style.display = 'block';
    menuBtn.textContent = '✕';
  } else {
    nav.style.display = 'none';
    menuBtn.textContent = '☰';
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();
