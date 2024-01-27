import axios from 'axios';
axios.defaults.baseURL = 'https://65ae478d1dfbae409a746f69.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const addContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
