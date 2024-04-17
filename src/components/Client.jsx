import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import { json } from "react-router-dom";
import Slide from "./Slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bwfc-api.vercel.app/client")
      .then((response) => response.json())
      .then((json) => {
        setClient(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading Client.........</h1>;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <h2>{client.subTitle}</h2>
        <h2>{client.title}</h2>

        <Slider {...settings}>
          {client.sliderItem.map((item) => (
            <div>
              <Slide item={item} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Client;
