import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StarRating from '../components/StarRating/StarRating';
import { useNavigate } from 'react-router-dom';

const AddNext = () => {
  const img = JSON.parse(localStorage.getItem('pic'));

  const adres = localStorage.getItem('adres');

  const [phone, setPhone] = useState();
  const [likeLocation, setLikeLocation] = useState();
  const [apartment, setApartment] = useState();
  const [owner, setOwner] = useState();

  const phoneAdd = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
    console.log(phone);
  };

  const likeLocationAdd = (e) => {
    setLikeLocation({ ...likeLocation, [e.target.name]: e.target.value });
    console.log(likeLocation);
  };
  const apartmentAdd = (e) => {
    setApartment({ ...apartment, [e.target.name]: e.target.value });
    console.log(apartment);
  };
  const ownerAdd = (e) => {
    setOwner({ ...owner, [e.target.name]: e.target.value });
    console.log(owner);
  };

  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    console.log(phone, likeLocation, apartment, owner);
    localStorage.setItem('phone', JSON.stringify(phone));
    localStorage.setItem('likeLocation', JSON.stringify(likeLocation));
    localStorage.setItem('apartment', JSON.stringify(apartment));
    localStorage.setItem('owner', JSON.stringify(owner));

    navigate('/ShoweAd');
  };

  return (
    <Container>
      <Row>
        <Col>
          <img src={img} width='300' height='200' />
        </Col>
        <Col>Adres : {adres}</Col>
      </Row>
      <Row>
        <div className='form-group mt-3'>
          <label>Telefon Numarası</label>
          <input
            name='phone'
            // type='email'
            className='form-control mt-1'
            placeholder='Telefon bilgilerini giriniz. '
            onChange={phoneAdd}
          />
        </div>
      </Row>
      <Row>
        <div className='form-group mt-3'>
          <label>Konumu tarif edermisiniz ?</label>
          <input
            name='likelocation'
            // type='email'
            className='form-control mt-1'
            placeholder='Konum Tarifi giriniz.'
            onChange={likeLocationAdd}
          />
        </div>
      </Row>
      <Row>
        <div className='form-group mt-3'>
          <label>Daire veya bina hakkında bilgi verebilirmisiniz ? *** </label>
          <input
            name='apartment'
            // type='email'
            className='form-control mt-1'
            placeholder='İlan hakkında bilgi ve görüşlerinizi yazanız.'
            onChange={apartmentAdd}
          />
        </div>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Binaya puan verebilirmisinz ? </label>
        <StarRating id={0} />
      </Row>
      <Row>
        <div className='form-group mt-3'>
          <label>Mülk sahibi hakında bilgi bilgi verebilirmisiniz ? </label>
          <input
            name='owner'
            // type='email'
            className='form-control mt-1'
            placeholder='mülk sahibi hakında bilgi bilgi ve görüşleriniz '
            onChange={ownerAdd}
          />
        </div>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Mülk sahibine puan verebilirmisiniz ? </label>
        <StarRating id={1} />
      </Row>
      <Row style={{ marginTop: 20 }}>
        <button onClick={handleNext} className='btn btn-primary'>
          Sonraki
        </button>
      </Row>
    </Container>
  );
};

export default AddNext;
