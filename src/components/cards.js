import { openModal, closeModal } from './utils';
import {
  imageModal,
  cardTemplate,
  elementsSection,
  imageModalImage,
  imageModalPlace,
} from './constants';
// Cards

export const createCard = (link, name) => {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardDeleteButton = card.querySelector('.element__delete');
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  const cardLikeButtoon = card.querySelector('.element__like-button');

  cardDeleteButton.addEventListener('click', () => {
    card.remove();
  });

  cardImage.src = link;
  cardImage.alt = name;

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

export const renderCards = (item) => {
  item.forEach((card) => {
    elementsSection.prepend(createCard(card.link, card.name));
  });
};
