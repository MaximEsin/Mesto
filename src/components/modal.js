// Open/Close popup
export const openModal = (item) => {
  item.classList.add('popup_opened');
};

export const closeModal = (item) => {
  item.classList.remove('popup_opened');
};
