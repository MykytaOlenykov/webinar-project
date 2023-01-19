const backdropEl = document.querySelector('.js-backdrop');
const openBtnModalEl = document.querySelector('[data-action="open-modal"]');
const closeBtnModalEl = document.querySelector('[data-action="close-modal"]');

backdropEl.addEventListener('click', onBackdropClick);
openBtnModalEl.addEventListener('click', onOpenModal);
closeBtnModalEl.addEventListener('click', onCloseModal);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  backdropEl.classList.remove('backdrop--is-hidden');
  // document.body.classList.add('lock');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  backdropEl.classList.add('backdrop--is-hidden');
  // document.body.classList.remove('lock');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code == 'Escape') {
    onCloseModal();
  }
}
