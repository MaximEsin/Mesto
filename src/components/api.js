// Config
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-6',
  headers: {
    authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
    'Content-Type': 'application/json',
  },
};

export const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(getResponse);
};
