import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { createNevImage } from '../api/imagePost';
import { createComment } from '../api/commentPost';

const Comment = () => {
  const img = JSON.parse(localStorage.getItem('pic'));
  const likeLocation = JSON.parse(localStorage.getItem('likeLocation'));
  const apartment = JSON.parse(localStorage.getItem('apartment'));
  const owner = JSON.parse(localStorage.getItem('owner'));
  const bina = JSON.parse(localStorage.getItem('bina'));
  const sahip = JSON.parse(localStorage.getItem('sahip'));
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user._id;
  const locationId = JSON.parse(localStorage.getItem('locationId'));
  console.log(likeLocation.likelocation);

  const [sendComment, setSendComment] = useState({
    userId: userId,
    ilanID: locationId,
    lat: localStorage.getItem('lat'),
    lng: localStorage.getItem('lng'),
    likeLocation: likeLocation.likelocation,
    image: img,
    apartment: apartment.apartment,
    apartmentRating: bina,
    owner: owner.owner,
    ownerRating: sahip,
  });

  const navigate = useNavigate();

  const SendAdd = async (e) => {
    try {
      e.preventDefault();
      const response = await createComment(sendComment);
      console.log(response);
      navigate('/Home');
      localStorage.removeItem('pic');
      localStorage.removeItem('owner');
      localStorage.removeItem('sahip');
      localStorage.removeItem('lng');
      localStorage.removeItem('apartment');
      localStorage.removeItem('bina');
      localStorage.removeItem('lat');
      localStorage.removeItem('adres');
      localStorage.removeItem('likeLocation');
      localStorage.removeItem('locationId');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <img src={img} width='300' height='200' />
        </Col>
      </Row>

      <Row style={{ marginTop: 10 }}>
        <label>Adres tarifi :{likeLocation.likelocation} </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Yorumlarınız ve Bilgilendirme :{apartment.apartment} </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>
          Bina için yaptığınız değerlendirme puanı :{' '}
          {<Rating initialValue={bina} />}
        </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Mülk sahibi hakında görüşleriniz : {owner.owner} </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>
          Mülk sahibi için yaptığınız değerlendirme puanı :{' '}
          {<Rating initialValue={bina} />}
        </label>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <button onClick={SendAdd} className='btn btn-primary'>
          İlan Yükle
        </button>
      </Row>
    </Container>
  );
};

export default Comment;
