import './pages/index.css';
import initialCards from './data/data';
import { openModal, closeModal } from './components/utils';
import {
  showInputError,
  hideInputError,
  checkInputValidity,
  hasInvalidInput,
  toggleButtonState,
  setEventListeners,
  enableValidation,
} from './components/validate';
import { createCard, renderCards } from './components/cards';
import {
  handlePersonFormSubmit,
  handleItemFormSubmit,
} from './components/formHandlers';

import {
  editButton,
  buttonClosePopupProfile,
  personModal,
  imageModal,
  personModalSubmit,
  buttonAddCard,
  buttonCloseItemPopup,
  profileName,
  profileDescription,
  personModalName,
  personModalDescription,
  itemModal,
  itemModalSubmit,
  buttonCloseImageModal,
  popups,
  profileAvatar,
} from './components/constants';

import { config, getResponse, getUserProfile } from './components/api';

getUserProfile().then((res) => {
  console.log(res);
  profileName.textContent = res.name;
  profileDescription.textContent = res.about;
  profileAvatar.src = res.avatar;
});

// Person modal event listeners
editButton.addEventListener('click', () => {
  openModal(personModal);
  personModalName.value = profileName.textContent;
  personModalDescription.value = profileDescription.textContent;
});

buttonClosePopupProfile.addEventListener('click', () => {
  closeModal(personModal);
});

buttonCloseItemPopup.addEventListener('click', () => {
  closeModal(itemModal);
});

buttonCloseImageModal.addEventListener('click', () => {
  closeModal(imageModal);
});

popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closeModal(event.currentTarget);
    }
  });
});

personModalSubmit.addEventListener('click', handlePersonFormSubmit);

renderCards(initialCards);

// Item modal event listeners
buttonAddCard.addEventListener('click', () => {
  openModal(itemModal);
});

itemModalSubmit.addEventListener('click', handleItemFormSubmit);

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

enableValidation({
  selectors,
});
