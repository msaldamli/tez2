import axios from 'axios';

export const numberOfLocations = async (userId) => {
  try {
    // console.log(userId);
    const res = await axios.post(
      'http://localhost:3500/api/ads/numberOfLocations',
      { userId },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    // console.log(res.data.length);
    if (res.data.length < 2) {
      return 'yeni kullanıcı';
    } else if (res.data.length >= 2) {
      return 'yeni emlakçı';
    }
    // return res.data.length;
  } catch (error) {
    console.log(error);
  }
};
