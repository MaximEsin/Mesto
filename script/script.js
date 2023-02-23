// Get DOM elements
const editButton = document.querySelector('.profile__edit-button');
const closeModalButton = document.querySelector('.popup__cross');
const personModal = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const personModalName = document.querySelector('.popup__input_value_name');
const personModalDescription = document.querySelector(
  '.popup__input_value_description'
);
const personModalSubmit = document.querySelector('.popup__button');

// Open/Close popup
editButton.addEventListener('click', () => {
  personModal.classList.add('popup_opened');
  personModalName.value = profileName.textContent;
  personModalDescription.value = profileDescription.textContent;
});

const closeModal = () => {
  personModal.classList.remove('popup_opened');
};

closeModalButton.addEventListener('click', closeModal);

// Submit form
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  const personModalNameValue = personModalName.value;
  const personModalDescriptionValue = personModalDescription.value;

  profileName.textContent = personModalNameValue;
  profileDescription.textContent = personModalDescriptionValue;
  closeModal();
};

personModalSubmit.addEventListener('click', handleFormSubmit);

// Data
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

// Cards

const renderElements = () => {
  const names = document.querySelectorAll('.element__title');
  const namesArray = Array.from(names);
  const images = document.querySelectorAll('.element__image');
  const imagesArray = Array.from(images);

  namesArray.forEach((name) => {
    for (i = 0; i <= namesArray.indexOf(name); i++) {
      name.textContent = initialCards[i].name;
    }
  });

  imagesArray.forEach((image) => {
    for (i = 0; i <= imagesArray.indexOf(image); i++) {
      image.src = initialCards[i].link;
    }
  });
};
renderElements();
// Item modal
const addButton = document.querySelector('.profile__add-button');
const closeItemModalButton = document.querySelector('#item-popup-cross');
const itemModal = document.querySelector('#item-popup');
const itemModalName = document.querySelector('#item-popup-input-name');
const itemModalLink = document.querySelector('#item-popup-input-link');
const itemModalSubmit = document.querySelector('#item-popup-button');
const elementTemplate = document.querySelector('#element-template').content;
const elementsSection = document.querySelector('.elements');

addButton.addEventListener('click', () => {
  itemModal.classList.add('popup_opened');
});

closeItemModalButton.addEventListener('click', () => {
  itemModal.classList.remove('popup_opened');
});

const handleItemFormSubmit = (evt) => {
  evt.preventDefault();
  const itemModalNameValue = itemModalName.value;
  const itemModalLinkValue = itemModalLink.value;

  const newItem = {
    name: itemModalNameValue,
    link: itemModalLinkValue,
  };
  initialCards.unshift(newItem);
  itemModal.classList.remove('popup_opened');
  itemModalName.value = '';
  itemModalLink.value = '';

  elementsSection.append(
    elementTemplate.querySelector('.element').cloneNode(true)
  );

  renderElements();
};

itemModalSubmit.addEventListener('click', handleItemFormSubmit);