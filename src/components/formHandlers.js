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
  personModalSubmit,
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
  personModalSubmit.textContent = 'Сохранить...';
  changeProfile(personModalName.value, personModalDescription.value)
    .then(closeModal(personModal))
    .catch((err) => {
      console.log(err);
    })
    .finally((personModalSubmit.textContent = 'Сохранить'));
  profileName.textContent = personModalName.value;
  profileDescription.textContent = personModalDescription.value;
};

// Item modal form
export const handleItemFormSubmit = () => {
  itemModalButton.textContent = 'Сохранить...';
  const newItem = {
    name: itemModalName.value,
    link: itemModalLink.value,
  };
  addNewCard(newItem.name, newItem.link)
    .then((res) => {
      renderCards([res]);
    })
    .then(closeModal(itemModal))
    .catch((err) => {
      console.log(err);
    })
    .finally((itemModalButton.textContent = 'Сохранить'));
  itemModalForm.reset();
  itemModalButton.classList.add('popup__button_inactive');
  itemModalButton.disabled = true;
};

// Avatar modal form
export const handleAvatarFormSubmit = () => {
  profileAvatar.src = avatarInput.value;
  buttonSubmitAvatar.textContent = 'Сохранить...';
  changeAvatar(avatarInput.value)
    .then(closeModal(avatarModal))
    .catch((err) => {
      console.log(err);
    })
    .finally((buttonSubmitAvatar.textContent = 'Сохранить'));
};
