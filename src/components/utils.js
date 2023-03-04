// Event handlers
export const handleEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeModal(openedPopup);
  }
};
// Open/Close popup
export const openModal = (item) => {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

export const closeModal = (item) => {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};
