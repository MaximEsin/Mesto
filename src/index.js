import './pages/index.css';
import initialCards from './data/data';
import { openModal, closeModal } from './components/modal';
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
  keyHandler,
} from './components/utils';

// Get DOM elements
const editButton = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = document.querySelector('#person-cross');
const personModal = document.querySelector('#person-popup');
const imageModal = document.querySelector('#image-popup');
const personModalSubmit = document.querySelector('#person-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseItemPopup = document.querySelector('#item-popup-cross');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const personModalName = document.querySelector('.popup__input_value_name');
const personModalDescription = document.querySelector(
  '.popup__input_value_description'
);
const itemModal = document.querySelector('#item-popup');
const itemModalSubmit = document.querySelector('#item-popup-button');
const buttonCloseImageModal = document.querySelector(
  '.popup__cross_place_image-container'
);
const popups = document.querySelectorAll('.popup');

export {
  personModal,
  profileName,
  profileDescription,
  personModalName,
  personModalDescription,
  itemModal,
  imageModal,
};

// Person modal event listeners
editButton.addEventListener('click', () => {
  openModal(personModal);
  personModalName.value = profileName.textContent;
  personModalDescription.value = profileDescription.textContent;
});

buttonClosePopupProfile.addEventListener('click', () => {
  closeModal(personModal);
});

personModalSubmit.addEventListener('click', handlePersonFormSubmit);

renderCards(initialCards);

// Item modal event listeners
buttonAddCard.addEventListener('click', () => {
  openModal(itemModal);
});

buttonCloseItemPopup.addEventListener('click', () => {
  closeModal(itemModal);
});

itemModalSubmit.addEventListener('click', handleItemFormSubmit);

// Image modal event listeners
buttonCloseImageModal.addEventListener('click', () => {
  closeModal(imageModal);
});

document.addEventListener('keydown', keyHandler);

popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closeModal(event.currentTarget);
    }
  });
});

enableValidation();
