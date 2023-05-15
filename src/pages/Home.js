/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const [a, setA] = useState(0);
  const [ilanlar, setilanlar] = useState();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios
  //       .get('http://localhost:3500/api/ads/')
  //       .then((response) => response.data)
  //       .then((res) => {
  //         console.log(res);
  //         return Promise.all(
  //           res.map((item) => {
  //             return axios
  //               .get(
  //                 `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${item.lat}&lon=${item.lng}`
  //               )
  //               .then((data) => {
  //                 // console.log(data);
  //                 item.adres = data.data.display_name;
  //                 return item;
  //               });
  //           })
  //         );
  //       });
  //     setilanlar(res);
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get('http://localhost:3500/api/ads/');
      console.log(response);
      setilanlar(response.data);
    };
    data();
  }, []);

  const handleClick = async (e, locationId, adres) => {
    e.preventDefault();
    console.log(locationId);
    const res = await axios.put('http://localhost:3500/api/ads/' + locationId, {
      adres,
    });
    console.log(res);
    navigate('/location/' + locationId, { replace: true });
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
                        return handleClick(e, ilan._id, ilan.adres);
                      }}
                    >
                      Lokasyona Git
                    </Button>
                  </div>
                </div>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
