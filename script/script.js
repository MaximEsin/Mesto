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

  const elementClone = elementTemplate
    .querySelector('.element')
    .cloneNode(true);
  const cloneLike = elementClone.querySelector('.element__like-button');
  const cloneDelete = elementClone.querySelector('.element__delete');

  cloneLike.addEventListener('click', () => {
    cloneLike.classList.toggle('element__like-button_active');
  });

  cloneDelete.addEventListener('click', () => {
    const element = cloneDelete.closest('.element');
    element.remove();
  });

  elementsSection.prepend(elementClone);
  handlePhotoModal();
  renderElements();
};

itemModalSubmit.addEventListener('click', handleItemFormSubmit);

// Like button toggle
const likeButtons = document.querySelectorAll('.element__like-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('element__like-button_active');
  });
});

// Delete button
const deleteButtons = document.querySelectorAll('.element__delete');

deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const element = button.closest('.element');
    element.remove();
  });
});

const handlePhotoModal = () => {
  // Open photo
  const imageModalTemplate = document.querySelector('#popup-template').content;
  const root = document.querySelector('.root');
  const elementImages = document.querySelectorAll('.element__image');
  const popupClone = imageModalTemplate.querySelector('.popup').cloneNode(true);

  elementImages.forEach((image) => {
    image.addEventListener('click', () => {
      const popupImage = popupClone.querySelector('.popup__image');
      const popupText = popupClone.querySelector('.popup__place');
      const element = image.closest('.element');
      const elementChildren = element.children;
      const elementContainer = elementChildren[2];
      const title =
        elementContainer.querySelector('.element__title').textContent;
      popupImage.src = image.src;
      popupText.textContent = title;
      root.prepend(popupClone);
    });
  });

  // Close photo
  const closeButton = popupClone.querySelector('.popup__cross');

  closeButton.addEventListener('click', () => {
    popupClone.remove();
  });
};
handlePhotoModal();
