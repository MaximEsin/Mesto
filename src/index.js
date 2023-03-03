import './pages/index.css';
import initialCards from './data/data';

// Get DOM elements
const editButton = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = document.querySelector('#person-cross');
const personModal = document.querySelector('#person-popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const personModalName = document.querySelector('.popup__input_value_name');
const personModalDescription = document.querySelector(
  '.popup__input_value_description'
);
const personModalSubmit = document.querySelector('#person-button');
const cardTemplate = document.querySelector('#element-template').content;
const elementsSection = document.querySelector('.elements');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseItemPopup = document.querySelector('#item-popup-cross');
const itemModal = document.querySelector('#item-popup');
const itemModalName = document.querySelector('#title-input');
const itemModalLink = document.querySelector('#link-input');
const itemModalSubmit = document.querySelector('#item-popup-button');
const imageModal = document.querySelector('#image-popup');
const buttonCloseImageModal = document.querySelector(
  '.popup__cross_place_image-container'
);
const imageModalImage = document.querySelector('.popup__image');
const imageModalPlace = document.querySelector('.popup__place');
const popups = document.querySelectorAll('.popup');

// Open/Close popup
const openModal = (item) => {
  item.classList.add('popup_opened');
};

const closeModal = (item) => {
  item.classList.remove('popup_opened');
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

// Person modal form
const handlePersonFormSubmit = () => {
  profileName.textContent = personModalName.value;
  profileDescription.textContent = personModalDescription.value;
  closeModal(personModal);
};

personModalSubmit.addEventListener('click', handlePersonFormSubmit);

// Cards
const createCard = (link, name) => {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardDeleteButton = card.querySelector('.element__delete');
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  const cardLikeButtoon = card.querySelector('.element__like-button');

  cardDeleteButton.addEventListener('click', () => {
    card.remove();
  });

  cardImage.src = link;

  cardImage.addEventListener('click', () => {
    imageModalImage.src = link;
    imageModalImage.alt = 'Пейзаж';
    imageModalPlace.textContent = name;
    openModal(imageModal);
  });

  cardTitle.textContent = name;

  cardLikeButtoon.addEventListener('click', () => {
    cardLikeButtoon.classList.toggle('element__like-button_active');
  });
  return card;
};

const renderCards = (item) => {
  item.forEach((card) => {
    elementsSection.prepend(createCard(card.link, card.name));
  });
};
renderCards(initialCards);

// Item modal event listeners
buttonAddCard.addEventListener('click', () => {
  openModal(itemModal);
});

buttonCloseItemPopup.addEventListener('click', () => {
  closeModal(itemModal);
});

// Item modal form
const handleItemFormSubmit = () => {
  const newItem = {
    name: itemModalName.value,
    link: itemModalLink.value,
  };
  closeModal(itemModal);
  itemModalName.value = '';
  itemModalLink.value = '';

  renderCards([newItem]);
};

itemModalSubmit.addEventListener('click', handleItemFormSubmit);

// Image modal event listeners
buttonCloseImageModal.addEventListener('click', () => {
  closeModal(imageModal);
});

// Event handlers
const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeModal(openedPopup);
  }
};

document.addEventListener('keydown', keyHandler);

popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closeModal(event.currentTarget);
    }
  });
});

// Validation
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__button_inactive');
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
