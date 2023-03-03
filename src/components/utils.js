import { closeModal } from './modal';
import { renderCards } from './cards';
import {
  itemModal,
  profileName,
  profileDescription,
  personModalName,
  personModalDescription,
  personModal,
} from '../index';
const itemModalName = document.querySelector('#title-input');
const itemModalLink = document.querySelector('#link-input');

// Person modal form
export const handlePersonFormSubmit = () => {
  profileName.textContent = personModalName.value;
  profileDescription.textContent = personModalDescription.value;
  closeModal(personModal);
};

// Item modal form
export const handleItemFormSubmit = () => {
  const newItem = {
    name: itemModalName.value,
    link: itemModalLink.value,
  };
  closeModal(itemModal);
  itemModalName.value = '';
  itemModalLink.value = '';

  renderCards([newItem]);
};

// Event handlers
export const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeModal(openedPopup);
  }
};
