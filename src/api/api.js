import axios from 'axios';
import baseURL from '../axios/index';

// const HTTP = axios.create({
//   baseURL: 'http://localhost:3500/',
// });

export const createNewUser = async (user) => {
  try {
    const newUser1 = JSON.stringify(user);
    const res = await axios.post(
      'https://tez2-api.onrender.com:3500/api/users/register',
      { newUser1 },
      { headers: { 'Content-Type': 'application/json' } }
    );
    console.log(res.data.user);
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};
export const login = async (user) => {
  try {
    console.log(user, '12345678');
    const user1 = JSON.stringify(user);

    const res = await axios.post(
      'https://tez2-api.onrender.com:3500/api/users/login',
      { user1 },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};
