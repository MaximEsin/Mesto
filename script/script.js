// Get DOM elements
const editButton = document.querySelector('.profile__edit-button');
const closePersonModalButton = document.querySelector('#person-cross');
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
const addButton = document.querySelector('.profile__add-button');
const closeItemModalButton = document.querySelector('#item-popup-cross');
const itemModal = document.querySelector('#item-popup');
const itemModalName = document.querySelector('#item-popup-input-name');
const itemModalLink = document.querySelector('#item-popup-input-link');
const itemModalSubmit = document.querySelector('#item-popup-button');
const imageModal = document.querySelector('#image-popup');
const closeImageModal = document.querySelector(
  '.popup__cross_place_image-container'
);
const imageModalImage = document.querySelector('.popup__image');
const imageModalPlace = document.querySelector('.popup__place');

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

closePersonModalButton.addEventListener('click', () => {
  closeModal(personModal);
});

// Person modal form
const handlePersonFormSubmit = (evt) => {
  evt.preventDefault();
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
    openModal(imageModal);
    imageModalImage.src = link;
    imageModalPlace.textContent = name;
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
addButton.addEventListener('click', () => {
  openModal(itemModal);
});

closeItemModalButton.addEventListener('click', () => {
  closeModal(itemModal);
});

// Item modal form
const handleItemFormSubmit = (evt) => {
  evt.preventDefault();

  const newItem = [
    {
      name: itemModalName.value,
      link: itemModalLink.value,
    },
  ];

  closeModal(itemModal);
  itemModalName.value = '';
  itemModalLink.value = '';

  renderCards(newItem);
};

itemModalSubmit.addEventListener('click', handleItemFormSubmit);

// Image modal event listeners
closeImageModal.addEventListener('click', () => {
  closeModal(imageModal);
});
