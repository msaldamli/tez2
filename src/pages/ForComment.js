/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { createNewLocation } from '../api/imagePost';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ForComment = () => {
  const [ilanlar, setilanlar] = useState();
  const [location] = useState({
    lat: localStorage.getItem('lat'),
    lng: localStorage.getItem('lng'),
  });

  useEffect(() => {
    const data = async () => {
      const result = await createNewLocation(location);
      console.log(result);

      setilanlar(result.data);
    };
    data();
    if (ilanlar.lenght === undefined) {
      navigate('/AddNext');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();

  const handleClick = (e, locationId) => {
    e.preventDefault();
    console.log(locationId);
    navigate('/ForCommentNext/' + locationId, { replace: true });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/AddNext');
  };

  return (
    <Container>
      <Row>
        {ilanlar?.map((ilan, i) => {
          //getAddress(ilan.lat, ilan.lng);
          return (
            <Col>
              <Row key={i} className='mt-4 p-4'>
                {/* {console.log(i)} */}
                <div className='card p-2' style={{ width: '20rem' }}>
                  <img
                    className='card-img-top'
                    src={ilan.image}
                    alt='Card image cap'
                  />
                  <div className='card-body'>
                    {ilan.comment != '' && (
                      <h5 className='card-title'>
                        Telefon Numarasi : {ilan.phone}
                      </h5>
                    )}
                    <p className='card-text'>{ilan.comment}</p>
                  </div>
                  <div className={'card-footer'}>
                    <h5 className='card-title'>Adres:</h5>
                    <p className='card-text'>{ilan.adres}</p>
                    <Button
                      className={'btn-primary'}
                      onClick={(e) => {
                        return handleClick(e, ilan._id);
                      }}
                    >
                      Lokasyonu seç
                    </Button>
                  </div>
                </div>
              </Row>
            </Col>
          );
        })}
      </Row>{' '}
      <Row style={{ marginTop: 20 }}>
        <button onClick={handleNext} className='btn btn-primary'>
          Bu ilanlanlardan biri değil !!
        </button>
      </Row>
    </Container>
  );
};

export default ForComment;
