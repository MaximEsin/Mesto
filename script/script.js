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
