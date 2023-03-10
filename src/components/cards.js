import { openModal, closeModal } from './utils';
import {
  imageModal,
  cardTemplate,
  elementsSection,
  imageModalImage,
  imageModalPlace,
} from './constants';
import { deleteCard, likeCard, removeLike } from './api';
// Cards

export const createCard = (link, name, likes, ownerId, cardId) => {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardDeleteButton = card.querySelector('.element__delete');
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  const cardLikeButtoon = card.querySelector('.element__like-button');
  const cardLikes = card.querySelector('.element__like-number');

  if (ownerId !== '1c2dbdcc88fec9f17cb92ad0') {
    cardDeleteButton.remove();
  }

  cardDeleteButton.addEventListener('click', () => {
    card.remove();
    deleteCard(cardId);
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

  cardLikes.textContent = likes.length;

  likes.forEach((item) => {
    if (item._id === '1c2dbdcc88fec9f17cb92ad0') {
      cardLikeButtoon.classList.add('element__like-button_active');
    }
  });

  cardLikeButtoon.addEventListener('click', () => {
    if (!cardLikeButtoon.classList.contains('element__like-button_active')) {
      cardLikeButtoon.classList.add('element__like-button_active');
      likeCard(cardId);
      cardLikes.textContent++;
    } else {
      cardLikeButtoon.classList.remove('element__like-button_active');
      removeLike(cardId);
      cardLikes.textContent--;
    }
  });
  return card;
};

export const renderCards = (item) => {
  item.forEach((card) => {
    elementsSection.prepend(
      createCard(card.link, card.name, card.likes, card.owner._id, card._id)
    );
  });
};
