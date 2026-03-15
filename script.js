// Выбираем все карточки проектов
const cards = document.querySelectorAll('.card');

// Добавляем подсветку при клике
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Убираем подсветку с других карточек
    cards.forEach(c => c.classList.remove('active-card'));

    // Добавляем подсветку текущей
    card.classList.add('active-card');

    // Показываем alert с названием проекта
    const projectName = card.querySelector('h5, p')?.textContent || "Проект";
    alert(`Вы выбрали проект: ${projectName}`);
  });
});

// Добавляем плавное появление карточек при скролле
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    } else {
      sec.style.opacity = 0;
      sec.style.transform = "translateY(50px)";
    }
  });
});
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 130;
    if(scrollY >= top){
      current = sec.getAttribute('id');
    }
  });
  links.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });
});
