import axios from 'axios';

export const createComment = async (yorum) => {
  try {
    console.log(yorum);
    const newComment = JSON.stringify(yorum);

    const res = await axios.post(
      'https://tez2-api.onrender.com:3500/api/comments/createComment',
      newComment,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const findLocations = async (location) => {
  try {
    console.log(location);
    const sendlocation = JSON.stringify(location);
    console.log(sendlocation);
    const res = await axios.post(
      'https://tez2-api.onrender.com:3500/api/ads/findForComent',
      { sendlocation },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
