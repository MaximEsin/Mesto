import { openModal, closeModal } from './utils';
import {
  imageModal,
  cardTemplate,
  elementsSection,
  imageModalImage,
  imageModalPlace,
} from './constants';
import { deleteCard, likeCard, removeLike } from './api';
import { userId } from '..';
// Cards

export const createCard = (link, name, likes, ownerId, cardId) => {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardDeleteButton = card.querySelector('.element__delete');
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  const cardLikeButtoon = card.querySelector('.element__like-button');
  const cardLikes = card.querySelector('.element__like-number');

  if (ownerId !== userId) {
    cardDeleteButton.remove();
  }

  cardDeleteButton.addEventListener('click', () => {
    deleteCard(cardId)
      .then(() => {
        card.remove();
      })
      .catch((err) => {
        console.log(err);
      });
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
    if (item._id === userId) {
      cardLikeButtoon.classList.add('element__like-button_active');
    }
  });

  cardLikeButtoon.addEventListener('click', () => {
    if (!cardLikeButtoon.classList.contains('element__like-button_active')) {
      likeCard(cardId)
        .then((res) => {
          cardLikeButtoon.classList.add('element__like-button_active');
          cardLikes.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      removeLike(cardId)
        .then((res) => {
          cardLikeButtoon.classList.remove('element__like-button_active');
          cardLikes.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
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
