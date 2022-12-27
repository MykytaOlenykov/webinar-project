const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.backdrop--is-hidden');

openModal.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('backdrop--is-hidden');
  document.body.classList.toggle('lock');
}
