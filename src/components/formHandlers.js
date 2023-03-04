import { renderCards } from './cards';
import { closeModal } from './utils';
import {
  itemModal,
  profileName,
  profileDescription,
  personModalName,
  personModalDescription,
  personModal,
  itemModalName,
  itemModalLink,
  itemModalForm,
  itemModalButton,
} from './constants';

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
  itemModalForm.reset();
  itemModalButton.classList.add('popup__button_inactive');
  itemModalButton.disabled = true;

  renderCards([newItem]);
};
