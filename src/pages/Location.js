/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const Location = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState({});

  const [date, setDate] = useState('');
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        'http://localhost:3500/api/ads/' + locationId
      );
      return res.data;
    };
    fetchUser().then((r) => {
      var date = new Date(r.createdAt); // dateStr you get from mongodb

      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      const str = `${d}/${m}/${y}`;
      setDate(str);
      setLocation(r);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationId]);
  const [comments, setComments] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        'http://localhost:3500/api/comments/' + locationId
      );
      return res.data;
      // return res.data;
    };
    fetchUser().then((response) => {
      // eslint-disable-next-line array-callback-return
      response.map((item) => {
        console.log(item);
        setComments(item);
      });
    });

    // console.log(comments);
  }, [locationId]);
  console.log(comments);

  return (
    <Container style={{ borderStyle: 'double' }}>
      <Row>
        <h1 style={{ textAlign: 'center' }}>İLAN BİLGİLERİ</h1>
      </Row>
      <Row>
        <Col>
          <img src={location.image} width='300' height='200' />
        </Col>
        <Col>Adres : {location.adres}</Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Vermiş olduğunuz telefon numarası :{location.phone} </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Adres tarifi :{location.likelocation} </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Yorumlarınız ve Bilgilendirme :{location.apartment} </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>
          Bina için yaptığınız değerlendirme puanı :{' '}
          {<Rating initialValue={location.apartmentRating} />}
        </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>Mülk sahibi hakında görüşleriniz : {location.owner} </label>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <label>
          Mülk sahibi için yaptığınız değerlendirme puanı :{' '}
          {<Rating initialValue={location.ownerRating} />}
        </label>
      </Row>

      {/* <Row>
        <Col></Col>
        <Col sm={8}>
          <div className='card mb-3'>
            <img
              className='card-img-top'
              src={location.image}
              alt='Card image cap'
            />
            <div className='card-body'>
              <h5 className='card-title'>Lokasyon</h5>
              <p className='card-text'>{location.adres}</p>
              <p>Telefon Numarası : {location.phone}</p>
              <p>Bilgi :{location.comment}</p>
              <p className='card-text'>
                <small className='text-muted'>
                  Bu lokasyon {date} tarihinde oluşturuldu.
                </small>
              </p>
            </div>
          </div>
          <Row>
            <div className='card mb-3'>
              Yorumlar
              <img
                className='card-img-top'
                src={comments.image}
                alt='Card image cap'
              />
              <div className='card-body'>
                <p>Bilgi :{comments.comment}</p>
                <p className='card-text'></p>
              </div>
            </div>
          </Row>
        </Col>
        <Col></Col>
      </Row> */}
    </Container>
  );
};

export default Location;
