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

// Плавное появление карточек при скролле
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
