import axios from "axios";

const apiURL = process.env.REACT_APP_REQRES_API;

function getUsers() {
  const response = axios.get(`${apiURL}/users`);

  return response;
}

function getCreatedUser({ 
  first_name, 
  last_name,
  birthdate,
  phone,
  email,
  address }) {
  const response = axios.post(`${apiURL}/users`, {
    first_name,
    last_name,
    birthdate,
    phone,
    email,
    address
  });

  return response;
}

function getUpdatedUser(id, user) {
  const response = axios.put(`${apiURL}/users/${id}`, {
    avatar: user.avatar,
    id: id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    birthdate: user.birthdate,
    phone: user.phone,
    address: user.address
  });

  return response;
}

function getDeletedUser(id) {
  const response = axios.delete(`${apiURL}/users/${id}`);

  return response;
}

export { getUsers, getCreatedUser, getUpdatedUser, getDeletedUser };
