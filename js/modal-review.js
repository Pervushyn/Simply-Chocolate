document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку для открытия модального окна и само модальное окно
    const openModalButton = document.querySelector('.button-secondary');
    const modal = document.querySelector('.backdrop-review');
    const closeModalButton = modal.querySelector('.modal-close');
  
    // Функция для открытия модального окна
    function openModal() {
      modal.classList.remove('is-hidden'); // Удаляем класс, который скрывает модальное окно
    }
  
    // Функция для закрытия модального окна
    function closeModal() {
      modal.classList.add('is-hidden'); // Добавляем класс, который скрывает модальное окно
    }
  
    // Добавляем обработчик события клика на кнопку открытия модального окна
    openModalButton.addEventListener('click', openModal);
  
    // Добавляем обработчик события клика на кнопку закрытия модального окна
    closeModalButton.addEventListener('click', closeModal);
  
    // Дополнительно: добавляем возможность закрыть модальное окно при клике вне его области
    modal.addEventListener('click', function(event) {
      if (event.target === this) {
        closeModal();
      }
    });
  
    // Предотвращаем закрытие модального окна при клике внутри самого модального окна
    document.querySelector('.modal-review').addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
