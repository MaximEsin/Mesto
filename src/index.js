import './pages/index.css';
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
  handleAvatarFormSubmit,
} from './components/formHandlers';

import {
  editButton,
  personModal,
  buttonClosePopupProfile,
  imageModal,
  personModalSubmit,
  buttonAddCard,
  buttonCloseItemPopup,
  profileName,
  profileDescription,
  buttonCloseImageModal,
  personModalName,
  personModalDescription,
  itemModal,
  itemModalSubmit,
  popups,
  profileAvatar,
  avatarModal,
  avatarOverlay,
  avatarModalClose,
  buttonSubmitAvatar,
  profileForm,
  itemForm,
  avatarForm,
} from './components/constants';

import {
  config,
  getResponse,
  getUserProfile,
  getInitialCards,
} from './components/api';

export let userId;

Promise.all([getUserProfile(), getInitialCards()])
  .then(([userData, cards]) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    userId = userData._id;
    renderCards(cards);
  })
  .catch((err) => {
    console.log(err);
  });

// Person modal event listeners
editButton.addEventListener('click', () => {
  openModal(personModal);
  personModalName.value = profileName.textContent;
  personModalDescription.value = profileDescription.textContent;
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closeModal(popup);
    }
    if (evt.target.classList.contains('popup__cross')) {
      closeModal(popup);
    }
  });
});

popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closeModal(event.currentTarget);
    }
  });
});

profileForm.addEventListener('submit', handlePersonFormSubmit);

// Item modal event listeners
buttonAddCard.addEventListener('click', () => {
  openModal(itemModal);
});

itemForm.addEventListener('submit', handleItemFormSubmit);

avatarOverlay.addEventListener('click', () => {
  openModal(avatarModal);
});

avatarForm.addEventListener('submit', handleAvatarFormSubmit);

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
