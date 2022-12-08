(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    radioList: document.querySelectorAll('.radio'),
    btn: document.querySelector('.button'),
  };
  let temp = 0;
  for (item of refs.radioList) {
    if (item.checked) {
      temp += 1;
    }
  }
  if (!temp) {
    // refs.btn.setAttribute('disabled');
    console.log(1);
  } else {
    console.log(2);
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
