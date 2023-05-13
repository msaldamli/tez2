import axios from 'axios';

export const createNevImage = async (Image) => {
  try {
    console.log(Image);
    const newImage = JSON.stringify(Image);

    const res = await axios.post(
      'https://tez2-api.onrender.com:3500/api/ads/createLocation',
      newImage,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const allLocations = async () => {
  try {
    const locations = await axios.get(
      'https://tez2-api.onrender.com:3500/api/ads/',
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log(locations.data);
    return locations.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewLocation = async (add) => {
  try {
    // console.log(add);
    const adds = JSON.stringify(add);
    // console.log(adds);
    const res = await axios.post(
      'https://tez2-api.onrender.com:3500/api/ads/getFindLocation',
      adds,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
