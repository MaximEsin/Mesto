import { renderCards } from './cards';
import { closeModal } from './utils';
import {
  changeProfile,
  addNewCard,
  getInitialCards,
  changeAvatar,
} from './api';
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
  avatarInput,
  buttonSubmitAvatar,
  profileAvatar,
  avatarModal,
} from './constants';

// Person modal form
export const handlePersonFormSubmit = () => {
  profileName.textContent = personModalName.value;
  profileDescription.textContent = personModalDescription.value;
  changeProfile(personModalName.value, personModalDescription.value);
  closeModal(personModal);
};

// Item modal form
export const handleItemFormSubmit = () => {
  const newItem = {
    name: itemModalName.value,
    link: itemModalLink.value,
  };
  addNewCard(newItem.name, newItem.link);
  closeModal(itemModal);
  itemModalForm.reset();
  itemModalButton.classList.add('popup__button_inactive');
  itemModalButton.disabled = true;
};

// Avatar modal form
export const handleAvatarFormSubmit = () => {
  profileAvatar.src = avatarInput.value;
  changeAvatar(avatarInput.value);
  closeModal(avatarModal);
};
