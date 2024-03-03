(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'), // Изменено на querySelectorAll
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  // Используйте forEach для добавления события 'click' к каждой кнопке
  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
