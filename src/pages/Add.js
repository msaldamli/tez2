import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WebCam from '../components/Add/WebCam';
import { createNewLocation } from '../api/imagePost';
import Map from '../components/Location/Map';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [adress, setAdres] = useState();

  const [location] = useState({
    lat: localStorage.getItem('lat'),
    lng: localStorage.getItem('lng'),
  });

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${localStorage.getItem(
        'lat'
      )}&lon=${localStorage.getItem('lng')}&format=json`,
      {
        headers: {
          'User-Agent': 'ID of your APP/service/website/etc. v0.1',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setAdres(res.display_name);
        localStorage.setItem('adres', res.display_name);
      });

    // const res = async () => {
    //   const konum = await axios.get(
    //     `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${localStorage.getItem(
    //       'lat'
    //     )}&lon=${localStorage.getItem('lng')}`
    //   );

    //   return konum.data;
    // };
    // res();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = async (e) => {
    try {
      const result = await createNewLocation(location);
      e.preventDefault();
      console.log('calistim');
      console.log(result.data.length);

      // eslint-disable-next-line eqeqeq
      if (result.data.length == 0) {
        console.log('ayni konumda ilan yok ');
        navigate('/AddNext');
      } else {
        console.log('bukonuma yakin ilan sayisi :  ' + result.data.length);
        navigate('/ForComment');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row className=' '>
        <Col></Col>
        <Col xs={6} style={{ height: 360, marginTop: 20 }}>
          <Map />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <WebCam />
      </Row>
      <Row style={{ marginTop: 20 }}>
        <button onClick={handleNext} className='btn btn-primary'>
          Sonraki
        </button>
      </Row>
    </Container>
  );
};

export default Add;
