import axios from 'axios';

export default {
  // get all listings
  getListings: () => {
    return axios.get('/api/listings');
  },

  // creates new user
  createUser: (userData) => {
    return axios.post('/api/users', userData);
  },

  // login for users
  userLogin: (userInfo) => {
    return axios.post('/api/users/login', userInfo);
  },
};
